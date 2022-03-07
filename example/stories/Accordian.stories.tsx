import React from "react";
import { Text } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon, Provider, DefaultTheme, AccordionGroup } from "@draftbit/ui";

export default {
  title: "Accordion",
  component: AccordionGroup,
} as ComponentMeta<typeof AccordionGroup>;

export const Basic: ComponentStory<typeof AccordionGroup> = (args) => (
  <Provider theme={DefaultTheme}>
    <AccordionGroup {...args}>
      <Text>Is it me your looking for?</Text>
    </AccordionGroup>
  </Provider>
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
  Icon: Icon,
};
