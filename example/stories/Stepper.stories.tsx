import React from "react";
// import { Text, View, ImageBackground } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider, DefaultTheme, Stepper } from "@draftbit/ui";

export default {
  title: "Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

export const Basic: ComponentStory<typeof Stepper> = (args) => (
  <Provider theme={DefaultTheme}>
    <Stepper {...args} />
  </Provider>
);

Basic.args = {
  min: 0,
  max: 5,
  // value: 1,
  defaultValue: 1,
  style: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  typeStyle: { color: "blue" },
  iconSize: 24,
  iconColor: "red",
  // onChange: (value: number) => console.log(value),
};

Basic.argTypes = {
  onChange: { action: "onChange" },
};
