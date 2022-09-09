const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
const util = require('util')
const execProm = util.promisify(exec)


async function runShellCommand(command) {
  let result
  try {
    result = await execProm(command)
  } catch (error) {
    result = error
  }
  if (Error[Symbol.hasInstance](result))
    return

  return result
}


describe('admin', () => {
  
  describe('passesupd',  () => {

    it('it uploads a csv', async () => {
      const res = await runShellCommand('se2199 admin --passesupd --source /Users/marilyvlontzou/softeng21/TL/TL21-99/backend/Data/newpasses2199copy.csv')
      //const res = await runShellCommand('se2199 admin --passesupd --source D:/softeng21-99/TL21-99/backend/Data/newpasses2199copy.csv')
      expect(res.stdout).to.equal('{ status: \'OK\' }\n')

    })
    it('it uploads a csv - no source given', async () => {
      const res = await runShellCommand('se2199 admin --passesupd')
      expect(res.stderr).to.contain('Error: --source= must also be provided when using --passesupd=\n')
    })
  })
})