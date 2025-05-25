import * as fs from 'node:fs';
import * as os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {BaseCommand} from "../base-command.js";


export default class Configure extends BaseCommand<typeof Configure> {
  static description = 'Configure commit message generation options'
  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  async run(): Promise<void> {
    const configPath = path.join(os.homedir(), '.autocommit.mjs');

    if (fs.existsSync(configPath)) {
      this.log(`Configuration file already exists at ${configPath}`);
      return;
    }

    const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
    const __dirname = path.dirname(__filename); // get the name of the directory
    fs.copyFileSync(path.join(__dirname, '..', '..', 'res', 'autocommit.mjs'), configPath);

    this.log(`Configuration file created at ${configPath}`);
  }
}
