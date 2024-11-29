const { fixupPluginRules } = require("@eslint/compat");
const esLintReactNative = require("eslint-plugin-react-native");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const hooksPlugin = require("eslint-plugin-react-hooks");
const tsEslint = require("typescript-eslint");

module.exports = [
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,

  // Workaround for `eslint-plugin-react-native` not supporting eslint flat configs
  // https://github.com/facebook/react-native/issues/42996#issuecomment-2275994981
  {
    name: "eslint-plugin-react-native",
    plugins: {
      "react-native": fixupPluginRules({
        rules: esLintReactNative.rules,
      }),
    },
    rules: {
      ...esLintReactNative.configs.all.rules,
      "react-native/sort-styles": "off",
      "react-native/no-inline-styles": "warn",
    },
  },

  // Workaround for `eslint-plugin-react-hooks` not supporting eslint flat configs
  // https://github.com/facebook/react/issues/28313#issuecomment-2379308650
  {
    plugins: {
      "react-hooks": fixupPluginRules(hooksPlugin),
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    ignores: [
      "scripts",
      "example/web-build",
      "node_modules/",
      "**/lib/**",
      "**/__generated__/**",
      "jest-setup.js",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",

      // ignore unused vars that start with underscore
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
