import React from "react";
import { View, Platform } from "react-native";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

import { Video } from "expo-av";

export default {
  title: "Video",
  component: Video,
} as ComponentMeta<typeof Video>;

export const Basic: ComponentStory<typeof Video> = (args) => (
  <View
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
    }}
  >
    <Video {...args} />
  </View>
);

Basic.args = {
  source: {
    uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  },
  resizeMode: "cover",
  useNativeControls: true,
  usePoster: false,
  isMuted: false,
  shouldPlay: false,
  isLooping: false,
  volume: 50,
  rate: 30,
  positionMillis: 20,
  style: { width: Platform.OS !== "web" ? "100%" : "50%", aspectRatio: 16 / 9 },
};
