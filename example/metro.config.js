const { createMetroConfiguration } = require("expo-yarn-workspaces");

const defaultConfig = createMetroConfiguration(__dirname);

defaultConfig.resolver.resolverMainFields = [
  "sbmodern",
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

defaultConfig.watchFolders = [...defaultConfig.watchFolders, "./.ondevice"];

module.exports = defaultConfig;
