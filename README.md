autocommit
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/autocommit.svg)](https://npmjs.org/package/autocommit)
[![Downloads/week](https://img.shields.io/npm/dw/autocommit.svg)](https://npmjs.org/package/autocommit)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g autocommit
$ autocommit COMMAND
running command...
$ autocommit (--version)
autocommit/0.0.1 darwin-arm64 node-v23.11.0
$ autocommit --help [COMMAND]
USAGE
  $ autocommit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`autocommit hello PERSON`](#autocommit-hello-person)
* [`autocommit hello world`](#autocommit-hello-world)
* [`autocommit help [COMMAND]`](#autocommit-help-command)
* [`autocommit plugins`](#autocommit-plugins)
* [`autocommit plugins add PLUGIN`](#autocommit-plugins-add-plugin)
* [`autocommit plugins:inspect PLUGIN...`](#autocommit-pluginsinspect-plugin)
* [`autocommit plugins install PLUGIN`](#autocommit-plugins-install-plugin)
* [`autocommit plugins link PATH`](#autocommit-plugins-link-path)
* [`autocommit plugins remove [PLUGIN]`](#autocommit-plugins-remove-plugin)
* [`autocommit plugins reset`](#autocommit-plugins-reset)
* [`autocommit plugins uninstall [PLUGIN]`](#autocommit-plugins-uninstall-plugin)
* [`autocommit plugins unlink [PLUGIN]`](#autocommit-plugins-unlink-plugin)
* [`autocommit plugins update`](#autocommit-plugins-update)

## `autocommit hello PERSON`

Say hello

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

## `autocommit hello world`

Say hello world

```
USAGE
  $ autocommit hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ autocommit hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/floriandejonckheere/autocommit/blob/v0.0.1/src/commands/hello/world.ts)_

## `autocommit help [COMMAND]`

Display help for autocommit.

```
USAGE
  $ autocommit help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for autocommit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `autocommit plugins`

List installed plugins.

```
USAGE
  $ autocommit plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ autocommit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/index.ts)_

## `autocommit plugins add PLUGIN`

Installs a plugin into autocommit.

```
USAGE
  $ autocommit plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into autocommit.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AUTOCOMMIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AUTOCOMMIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ autocommit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ autocommit plugins add myplugin

  Install a plugin from a github url.

    $ autocommit plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ autocommit plugins add someuser/someplugin
```

## `autocommit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ autocommit plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ autocommit plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/inspect.ts)_

## `autocommit plugins install PLUGIN`

Installs a plugin into autocommit.

```
USAGE
  $ autocommit plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into autocommit.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AUTOCOMMIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AUTOCOMMIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ autocommit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ autocommit plugins install myplugin

  Install a plugin from a github url.

    $ autocommit plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ autocommit plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/install.ts)_

## `autocommit plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ autocommit plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ autocommit plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/link.ts)_

## `autocommit plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ autocommit plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ autocommit plugins unlink
  $ autocommit plugins remove

EXAMPLES
  $ autocommit plugins remove myplugin
```

## `autocommit plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ autocommit plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/reset.ts)_

## `autocommit plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ autocommit plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ autocommit plugins unlink
  $ autocommit plugins remove

EXAMPLES
  $ autocommit plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/uninstall.ts)_

## `autocommit plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ autocommit plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ autocommit plugins unlink
  $ autocommit plugins remove

EXAMPLES
  $ autocommit plugins unlink myplugin
```

## `autocommit plugins update`

Update installed plugins.

```
USAGE
  $ autocommit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/update.ts)_
<!-- commandsstop -->
