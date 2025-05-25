autocommit
=================

Leverage the power of LLMs to automatically generate commit messages based on the staged changes in your git repository.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/floriandejonckheere/autocommit.svg)](https://npmjs.org/package/floriandejonckheere/autocommit)
[![Downloads/week](https://img.shields.io/npm/dw/floriandejonckheere/autocommit.svg)](https://npmjs.org/package/floriandejonckheere/autocommit)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @floriandejonckheere/autocommit
$ autocommit COMMAND
running command...
$ autocommit (--version)
@floriandejonckheere/autocommit/0.0.1 darwin-arm64 node-v23.8.0
$ autocommit --help [COMMAND]
USAGE
  $ autocommit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`autocommit generate`](#autocommit-generate)

## `autocommit generate`

Generate a commit message based on staged changes

```
USAGE
  $ autocommit hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ autocommit hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/floriandejonckheere/autocommit/blob/v0.0.1/src/commands/hello/index.ts)_
<!-- commandsstop -->
