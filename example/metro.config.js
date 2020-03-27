// /* eslint-disable import/no-commonjs */

const fs = require("fs")
const path = require("path")
const blacklist = require("metro-config/src/defaults/blacklist")

const root = path.resolve(__dirname, "..")
const pak = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"))

const modules = [
  "@babel/runtime",
  "@expo/vector-icons",
  ...Object.keys(pak.dependencies),
  ...Object.keys(pak.peerDependencies)
]

module.exports = {
  projectRoot: __dirname,
  watchFolders: [root],

  resolver: {
    blacklistRE: blacklist([
      new RegExp(`^${escape(path.join(root, "node_modules"))}\\/.*$`),
      new RegExp(`^${escape(path.join(root, "example", "node_modules", "node-fetch"))}\\/.*$`),
      new RegExp(`^${escape(path.join(root, "example", "node_modules", "glob"))}\\/.*$`)
    ]),

    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, "node_modules", name)
      return acc
    }, {}),

    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true
        }
      })
    }
  }
}
