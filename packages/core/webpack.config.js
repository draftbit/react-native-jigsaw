module.exports = {
  module: {
    rules: [
      //Needed for react-native-web-webview (https://github.com/react-native-web-community/react-native-web-webview#getting-started)
      {
        test: /postMock.html$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
      //Needed for bottom sheet dependencies
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
};
