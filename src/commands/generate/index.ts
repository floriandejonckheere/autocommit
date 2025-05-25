import {Flags} from '@oclif/core'

import {BaseCommand} from "../../base-command.js";

export default class Generate extends BaseCommand<typeof Generate> {
  static description = 'Generate a commit message'
  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> --verbose',
  ]
  static flags = {
    verbose: Flags.boolean({description: 'Generate more verbose commit messages', required: false}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    this.log(`Generating ${flags.verbose ? 'verbose ' : ''}commit messages!`)
    this.log(`User configuration: ${JSON.stringify(this.userConfig, null, 2)}`)
  }
}
