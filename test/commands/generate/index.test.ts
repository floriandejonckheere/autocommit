import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('generate', () => {
  it('runs generate', async () => {
    const {stdout} = await runCommand('generate --verbose')
    expect(stdout).to.contain('Generating verbose commit messages!')
  })
})
