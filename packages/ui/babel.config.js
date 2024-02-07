module.exports = {
  presets: [
    [
      "module:metro-react-native-babel-preset",
      {
        /**
         * Addresses issue caused on snack that leads to `Unable to resolve module 'app/node_modules/@babel/runtime/helpers/interopRequireDefault.js'`
         * See: https://github.com/expo/snack/pull/302
         */
        disableImportExportTransform: true,
      },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
  ],
};
