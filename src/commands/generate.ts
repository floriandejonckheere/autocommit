import {Flags} from '@oclif/core'
import { simpleGit } from 'simple-git';

import {BaseCommand} from '../base-command.js';
import {gemini} from '../gemini.js';
import {generatePrompt} from '../generate-prompt.js';
import {Config} from '../types.js';

export default class Generate extends BaseCommand<typeof Generate> {
  static description = 'Generate a commit message'
  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> --style detailed --typed --scoped --technical --tense past --emoji',
  ]
  static flags = {
    style: Flags.string({
      default: 'simple',
      description: 'Specify the style of the commit message',
      options: ['simple', 'detailed'],
      required: false,
    }),
    typed: Flags.boolean({
      default: false,
      description: 'Prefix commit message with type (e.g., feat, fix, docs)',
      required: false,
    }),
    scoped: Flags.boolean({
      default: false,
      description: 'Include scope in the commit message (e.g. core, auth, ui)',
      required: false,
    }),
    technical: Flags.boolean({
      default: false,
      description: 'Include technical details in the commit message',
      required: false,
    }),
    tense: Flags.string({
      default: 'present',
      description: 'Specify the tense of the commit message',
      options: ['present', 'past'],
      required: false,
    }),
    emoji: Flags.boolean({
      default: false,
      description: 'Include emoji in the commit message',
      required: false,
    }),
    force: Flags.boolean({
      default: false,
      description: 'Force the generation of a commit message even if the staged changes are too large',
      required: false,
    })
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    const config: Config = {
      ...this.autocommitConfig,
      // @ts-expect-error - enum value
      style: flags.style,
      typed: flags.typed,
      scoped: flags.scoped,
      technical: flags.technical,
      // @ts-expect-error - enum value
      tense: flags.tense,
      emoji: flags.emoji,
    };

    const prompt = generatePrompt(config)

    const changes = await simpleGit()
      .diff(['--cached', '--text', '--unified=0'])
      .then(diff => diff.trim())

    if (!changes || changes.length === 0) {
      this.log('No staged changes found. Please stage your changes before generating a commit message.');

      return;
    }

    // Check if the staged changes are too large
    const countTokensResponse = await gemini.models.countTokens({
      model: "gemini-2.0-flash-lite",
      contents: [
        prompt,
        changes
      ],
    });

    const tokens = countTokensResponse.totalTokens || 0;

    if (!flags.force && tokens > 1000) {
      this.log(`Staged changes are too large to process (${tokens} tokens). Please reduce the size of your staged changes, or use the --force flag to bypass this check.`);

      return;
    }

    const response = await gemini.models.generateContent({
      contents: changes,
      model: "gemini-2.0-flash-lite",
      config: {
        systemInstruction: prompt,
        maxOutputTokens: 100,
        temperature: 0.1,
        topK: 1,
        topP: 0.95,
      },
    });

    if (response.text) {
      this.log(response.text.trim());
    } else {
      this.log('No commit message could be generated. Please try again with different options or check your staged changes.');
    }
  }
}
