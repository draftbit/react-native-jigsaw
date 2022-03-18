import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

import { Provider, DefaultTheme } from "@draftbit/ui";

export const decorators = [
  withBackgrounds,
  (Story) => (
    <Provider theme={DefaultTheme}>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  backgrounds: [
    { name: "plain", value: "white", default: true },
    { name: "warm", value: "hotpink" },
    { name: "cool", value: "deepskyblue" },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
