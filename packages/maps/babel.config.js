module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["@react-native/babel-preset"],
  };
};
