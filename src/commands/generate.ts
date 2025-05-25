import {Flags} from '@oclif/core'

import {BaseCommand} from "../base-command.js";
import {gemini} from "../gemini.js";
import {generatePrompt} from "../generate-prompt.js";

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
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    const {style, typed, scoped, technical, tense, emoji} = flags as {
      style: 'simple' | 'detailed',
      typed: boolean,
      scoped: boolean,
      technical: boolean,
      tense: 'present' | 'past',
      emoji: boolean,
    };

    const prompt = generatePrompt({ style, typed, scoped, technical, tense, emoji })

    const response = await gemini.models.generateContent({
      contents: [
        prompt,
      ],
      model: "gemini-2.0-flash-lite",
      config: {
        maxOutputTokens: 500,
        temperature: 0.1,
      },
    });
    this.log(response.text);
  }
}
