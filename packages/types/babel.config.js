module.exports = (api) => {
  const isTest = api.env("test");

  return {
    presets: ["module:metro-react-native-babel-preset"],
  };
};
