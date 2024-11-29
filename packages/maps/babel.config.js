module.exports = (api) => {
  const isTest = api.env("test");

  return {
    presets: ["@react-native/babel-preset"],
  };
};
