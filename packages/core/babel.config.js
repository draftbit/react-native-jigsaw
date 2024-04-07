module.exports = (api) => {
  const isTest = api.env("test");

  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
