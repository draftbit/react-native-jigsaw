module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["@react-native/babel-preset"],
    plugins: [
      "@babel/plugin-transform-export-namespace-from",
      "@babel/preset-flow",
      "react-native-reanimated/plugin",
    ],
  };
};
