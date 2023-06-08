module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-class-properties",
    "react-native-reanimated/plugin",
  ],
  ignore: ["**/__tests__"],
};
