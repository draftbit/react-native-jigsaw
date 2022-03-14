import React from "react";
import { Text } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AccordionGroup } from "@draftbit/ui";

export default {
  title: "Accordion",
  component: AccordionGroup,
} as ComponentMeta<typeof AccordionGroup>;

export const Basic: ComponentStory<typeof AccordionGroup> = (args) => (
  <AccordionGroup {...args}>
    <Text>Is it me your looking for?</Text>
  </AccordionGroup>
);

Basic.args = {
  label: "Hello!",
  caretColor: "black",
  openColor: "red",
  closedColor: "green",
  style: { padding: 8 },
  expanded: false,
  icon: "star",
  iconSize: 50,
  caretSize: 50,
};
