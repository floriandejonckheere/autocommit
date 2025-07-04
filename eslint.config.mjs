import {includeIgnoreFile} from '@eslint/compat'
import oclif from 'eslint-config-oclif'
import prettier from 'eslint-config-prettier'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const gitignorePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.gitignore')

export default [includeIgnoreFile(gitignorePath), ...oclif, prettier, {
  rules: {
    '@stylistic/lines-between-class-members': 'off',
    'perfectionist/sort-classes': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-object-types': 'off',
    'perfectionist/sort-union-types': 'off',
  }
}]
