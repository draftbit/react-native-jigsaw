import React from "react";
import { AudioPlayer, ScreenContainer } from "@draftbit/ui";

export default function AudioPlayerExample() {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <AudioPlayer source={require("./assets/drumkick.wav")} />
    </ScreenContainer>
  );
}
