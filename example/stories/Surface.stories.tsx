import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Surface } from "@draftbit/ui";

export default {
  title: "Surface",
  component: Surface,
} as ComponentMeta<typeof Surface>;

export const Basic: ComponentStory<typeof Surface> = (args) => (
  <Surface {...args}>
    <ImageBackground
      source={require("../assets/icon.png")}
      style={{
        aspectRatio: 1 / 1,
        height: 200,
      }}
      resizeMode={"cover"}
    />

    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>Bro</Text>
    </View>
  </Surface>
);

Basic.args = {
  elevation: 10,
  style: {
    aspectRatio: 2 / 3,
    flexDirection: "column",
    height: 300,
    width: 200,
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
    overflow: "visible",
    backgroundColor: "pink",
  },
};
