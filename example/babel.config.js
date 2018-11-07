module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@draftbit/ui": "../src/index",
            "@draftbit/ui/types": "../types",
            "react-native-vector-icons": "@expo/vector-icons"
          }
        }
      ]
    ]
  };
};
