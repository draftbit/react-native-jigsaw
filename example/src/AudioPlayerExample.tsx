import React from "react";
import { AudioPlayer, ScreenContainer } from "@draftbit/ui";

export default function AudioPlayerExample() {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <AudioPlayer source={require("./assets/loop.wav")} />
      <AudioPlayer
        source={{
          uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
        }}
      />
    </ScreenContainer>
  );
}
