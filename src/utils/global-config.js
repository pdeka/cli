const Configstore = require('configstore')
const os = require('os')
const path = require('path')
const uuidv4 = require('uuid/v4')

const globalConfigDefaults = {
  /* disable stats from being sent to Netlify */
  telemetryDisabled: false,
  /* cliId */
  cliId: uuidv4()
}

//Prabin - change path to make it local. The .netlify folder is one level below the current working dir.
const globalConfigOptions = {
  configPath: path.join('./', '.netlify', 'config.json')
}

module.exports = new Configstore(null, globalConfigDefaults, globalConfigOptions)
