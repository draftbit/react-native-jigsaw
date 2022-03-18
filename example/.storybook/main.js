const {
  withStorybookModuleFederation,
} = require("storybook-module-federation");
const deps = require("../package.json").dependencies;

const moduleFederationConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./LinearGradient": require.resolve(
      "../../packages/native/src/components/LinearGradient.tsx"
    ),
    "./Video": require.resolve("../stories/Video.tsx"), // NOTE create native module
  },
  shared: {
    ...deps,
    "react": {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};

const storybookConfig = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [
          "react-native-reanimated",
          "react-native-vector-icons",
        ],
        babelPlugins: ["react-native-reanimated/plugin"],
      },
      projectRoot: require("path").resolve(__dirname, "../../"),
    },
  ],
  framework: "@storybook/react",
};

module.exports = withStorybookModuleFederation(moduleFederationConfig)(
  storybookConfig
);
