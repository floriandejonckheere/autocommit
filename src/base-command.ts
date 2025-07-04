import 'dotenv/config'
import {Command, Flags, Interfaces} from '@oclif/core'
import * as fs from 'node:fs';
import * as os from 'node:os';
import path from 'node:path';

import {Config} from './types.js';

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<T['flags'] & typeof BaseCommand['baseFlags']>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export enum LogLevel {
  debug = 'debug',
  error = 'error',
  info = 'info',
  warn = 'warn',
}

export abstract class BaseCommand<T extends typeof Command> extends Command {
  // define flags that can be inherited by any command that extends BaseCommand
  static baseFlags = {
    'log-level': Flags.option({
      default: LogLevel.info,
      helpGroup: 'GLOBAL',
      options: Object.values(LogLevel),
      summary: 'Specify level for logging',
    })(),
    'dry-run': Flags.boolean({
      default: false,
      helpGroup: 'GLOBAL',
      summary: 'Run the command without making any API calls',
    }),
    force: Flags.boolean({
      default: false,
      description: 'Force the generation of a commit message even if the staged changes are too large',
      required: false,
    }),
  }

  protected args!: Args<T>
  protected flags!: Flags<T>
  protected autocommitConfig!: Config

  protected async catch(err: Error & {exitCode?: number}): Promise<unknown> {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err)
  }

  protected async finally(_: Error | undefined): Promise<unknown> {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(_)
  }

  public async init(): Promise<void> {
    await super.init()
    const {args, flags} = await this.parse({
      args: this.ctor.args,
      baseFlags: (super.ctor as typeof BaseCommand).baseFlags,
      flags: this.ctor.flags,
      strict: this.ctor.strict,
    })
    this.flags = flags as Flags<T>
    this.args = args as Args<T>

    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set. Please set it in your environment or in .env.')
    }

    // Load the autocommit configuration
    const configPath = path.join(os.homedir(), '.autocommit.mjs');

    if (!fs.existsSync(configPath)) {
      return;
    }

    const defaultConfig = await import(configPath);
    this.autocommitConfig = defaultConfig.default;
  }
}