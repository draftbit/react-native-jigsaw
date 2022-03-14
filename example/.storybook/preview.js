import React from "react";
import { Provider, DefaultTheme } from "@draftbit/ui";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider theme={DefaultTheme}>
      <Story />
    </Provider>
  ),
];
