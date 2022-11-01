import React from "react";
import { Text } from "react-native";
import { AudioPlayer, ScreenContainer } from "@draftbit/ui";

export default function AudioPlayerExample() {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Text> Local asset value </Text>
      <AudioPlayer
        style={{
          backgroundColor: "#eee",
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 8,
          paddingBottom: 8,
          borderRadius: 24,
          marginBottom: 20,
          fontWeight: "bold",
          height: 40,
          width: "80%",
        }}
        source={require("./assets/loop.wav")}
        sliderColor="red"
        completedTrackColor="white"
        remainingTrackColor="#999999"
        playSize={18}
      />
      <AudioPlayer
        style={{
          backgroundColor: "#333",
          padding: 8,
          margin: 8,
          marginBottom: 20,
          borderRadius: 4,
          color: "#fff",
        }}
        source={require("./assets/loop.wav")}
        sliderColor="white"
        completedTrackColor="white"
        remainingTrackColor="#dedede"
        playSize={18}
        playColor="#fff"
      />
      <Text> Remote value </Text>
      <AudioPlayer
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 8,
          paddingBottom: 8,
          color: "red",
          fontSize: 14,
        }}
        source={{
          uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
        }}
      />
    </ScreenContainer>
  );
}
