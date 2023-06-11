module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "module:metro-react-native-babel-preset",
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
  ],
};
