/* eslint-disable @typescript-eslint/no-var-requires */
const mainPackageJson = require('../package.json')

const glob = require('glob')

const fs = require('fs')

const versioning = mainPackageJson.version
console.log('Bumping all packages to version:', versioning)

glob.sync('**/package.json').forEach((location) => {
  const packageJsonStr = fs.readFileSync(location).toString()
  const packageJson = JSON.parse(packageJsonStr)
  packageJson.version = versioning
  fs.writeFileSync(location, JSON.stringify(packageJson, null, 2))
})
