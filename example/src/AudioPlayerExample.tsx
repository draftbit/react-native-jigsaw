import React from "react";
import { Text } from "react-native";
import { AudioPlayer, ScreenContainer } from "@draftbit/ui";

export default function AudioPlayerExample() {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Text> Local asset value </Text>
      <AudioPlayer source={require("./assets/loop.wav")} />
      <Text> Remote value </Text>
      <AudioPlayer
        source={{
          uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
        }}
      />
    </ScreenContainer>
  );
}
