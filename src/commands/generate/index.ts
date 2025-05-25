import {Args, Command, Flags} from '@oclif/core'

export default class Generate extends Command {
  static args = {}
  static description = 'Generate a commit message'
  static examples = [
    `<%= config.bin %> <%= command.id %>
`,
  ]
  static flags = {
    verbose: Flags.boolean({description: 'Generate more verbose commit messages', required: false}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    this.log(`Generating ${flags.verbose ? 'verbose ' : ''}commit messages!`)
  }
}
