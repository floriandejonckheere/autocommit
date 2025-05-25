autocommit
=================

Leverage the power of LLMs to automatically generate commit messages based on the staged changes in your git repository.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@floriandejonckheere/autocommit.svg)](https://npmjs.org/package/@floriandejonckheere/autocommit)
[![Downloads/week](https://img.shields.io/npm/dw/@floriandejonckheere/autocommit.svg)](https://npmjs.org/package/@floriandejonckheere/autocommit)

# Usage

Install the CLI globally using npm:

    npm install -g @floriandejonckheere/autocommit

Or run it directly using npx:

    npx @floriandejonckheere/autocommit

Configure the CLI by running:

    autocommit configure

This will create a `~/.autocommit.json` file where you can set your OpenAI API key and other configurations.

Generate a commit message based on the staged changes in your git repository by running:

    autocommit generate

See the [Commands](#commands) section below for more details on available commands.

# Commands
<!-- commands -->
* [`autocommit generate`](#autocommit-generate)

## `autocommit generate`

Generate a commit message based on staged changes

```
Generate a commit message

USAGE
  $ autocommit generate [--log-level debug|warn|error|info|trace] [--style simple|detailed] [--typed] [--scoped] [--technical] [--tense present|past] [--emoji]

FLAGS
  --emoji           Include emoji in the commit message
  --scoped          Include scope in the commit message (e.g. core, auth, ui)
  --style=<option>  [default: simple] Specify the style of the commit message
                    <options: simple|detailed>
  --technical       Include technical details in the commit message
  --tense=<option>  [default: present] Specify the tense of the commit message
                    <options: present|past>
  --typed           Prefix commit message with type (e.g., feat, fix, docs)

GLOBAL FLAGS
  --log-level=<option>  [default: info] Specify level for logging.
                        <options: debug|warn|error|info|trace>

DESCRIPTION
  Generate a commit message

EXAMPLES
  $ autocommit generate

  $ autocommit generate --style detailed --typed --scoped --technical --tense past --emoji
```

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.