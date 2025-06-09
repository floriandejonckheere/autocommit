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
    head: Flags.boolean({
      // default: false,
      description: 'Use the current HEAD as the base for the commit message',
      required: false,
    }),

    style: Flags.string({
      // default: 'simple',
      description: 'Specify the style of the commit message',
      options: ['simple', 'detailed'],
      required: false,
    }),
    typed: Flags.boolean({
      // default: false,
      description: 'Prefix commit message with type (e.g., feat, fix, docs)',
      required: false,
    }),
    scoped: Flags.boolean({
      // default: false,
      description: 'Include scope in the commit message (e.g. core, auth, ui)',
      required: false,
    }),
    technical: Flags.boolean({
      // default: false,
      description: 'Include technical details in the commit message',
      required: false,
    }),
    tense: Flags.string({
      // default: 'present',
      description: 'Specify the tense of the commit message',
      options: ['present', 'past'],
      required: false,
    }),
    emoji: Flags.boolean({
      // default: false,
      description: 'Include emoji in the commit message',
      required: false,
    })
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    const setFlags = Object.fromEntries(
      Object.entries(flags).filter(([, value]) => value !== undefined && value !== null && value !== '')
    );

    const config: Config = {
      ...this.autocommitConfig,
      ...setFlags,
    };

    if (flags['log-level'] === 'debug') {
      this.log('Config options:', JSON.stringify(config, null, 2));
    }

    const prompt = generatePrompt(config)

    if (flags['log-level'] === 'debug') {
      this.log(`Prompt generated:\n${prompt}\n\n`);
    }

    const changes = await simpleGit()
      .diff(['--text', '--unified=0', flags.head ? 'HEAD~..HEAD' : '--staged'])
      .then(diff => diff.replaceAll(/\s{2,}/g, ' '))


    if (flags['log-level'] === 'debug') {
      this.log(`Context:\n${changes}`);
    }

    if (!changes || changes.length === 0) {
      this.log('No staged changes found. Please stage your changes before generating a commit message.');

      return;
    }

    if (flags['dry-run']) {
      this.log('Dry run mode enabled. No API calls are made.');

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
