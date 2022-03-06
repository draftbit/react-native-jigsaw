import React from "react";
import { Text } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LinearGradient } from "./LinearGradient";

export default {
  title: "LinearGradient",
  component: LinearGradient,
} as ComponentMeta<typeof LinearGradient>;

export const Basic: ComponentStory<typeof LinearGradient> = (args) => (
  <LinearGradient {...args}>
    <Text>Linear Gradient Example</Text>
  </LinearGradient>
);

Basic.args = {
  color1: "rgba(90, 69, 255, 1)",
  color2: "rgba(59, 201, 234, 1)",
  color3: undefined,
  startX: 0,
  startY: 0,
  endX: 100,
  endY: 100,
  style: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
    borderWidth: 1,
    paddingVertical: "10%",
  },
};
