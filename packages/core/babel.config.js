module.exports = (api) => {
  const isTest = api.env("test");

  return {
    presets: ["@react-native/babel-preset"],
    plugins: [
      "@babel/plugin-transform-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
