module.exports = (api) => {
  const isTest = api.env("test");

  return {
    presets: [
      [
        "module:metro-react-native-babel-preset",
        {
          /**
           * Addresses issue caused on snack that leads to `Unable to resolve module 'app/node_modules/@babel/runtime/helpers/interopRequireDefault.js'`
           * See: https://github.com/expo/snack/pull/302
           * Always false for tests for jest to work
           */
          disableImportExportTransform: !isTest,
        },
      ],
    ],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
