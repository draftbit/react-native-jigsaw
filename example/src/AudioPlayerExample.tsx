import React from "react";
import { Text } from "react-native";
import { AudioPlayer, ButtonSolid } from "@draftbit/ui";
import type { AudioPlayerRef } from "@draftbit/ui";
import Section, { Container } from "./Section";

export default function AudioPlayerExample() {
  const audioPlayerRef = React.useRef<AudioPlayerRef>(null);
  const [headlessState, setHeadlessState] = React.useState<object>();

  return (
    <Container style={{}}>
      <Section style={{}} title="Default styling">
        <AudioPlayer
          source={require("./assets/loop.wav")}
          playsInBackground
          interruptionMode="stop"
        />
      </Section>
      <Section style={{}} title="Loop">
        <AudioPlayer
          source={require("./assets/loop.wav")}
          playsInBackground
          interruptionMode="stop"
          isLooping
        />
      </Section>
      <Section style={{}} title="Adjust volume">
        <AudioPlayer
          source={require("./assets/loop.wav")}
          playsInBackground
          interruptionMode="stop"
          volume={0.3}
        />
      </Section>
      <Section style={{}} title="Custom styling">
        <AudioPlayer
          style={{
            backgroundColor: "#eee",
            borderRadius: 24,
            borderWidth: 0,
            fontWeight: "bold",
            height: 40,
            width: "80%",
          }}
          source={require("./assets/loop.wav")}
          sliderColor="red"
          completedTrackColor="white"
          remainingTrackColor="#999999"
          togglePlaybackIconSize={18}
          togglePlaybackIconColor="green"
          playsInBackground
          interruptionMode="stop"
        />
        <AudioPlayer
          style={{
            backgroundColor: "#333",
            padding: 8,
            borderWidth: 0,
            borderRadius: 4,
            color: "#fff",
            marginTop: 10,
          }}
          source={require("./assets/loop.wav")}
          sliderColor="white"
          completedTrackColor="white"
          remainingTrackColor="#dedede"
          togglePlaybackIconSize={18}
          togglePlaybackIconColor="#fff"
        />
        <AudioPlayer
          style={{ width: 50, marginTop: 10 }}
          source={require("./assets/loop.wav")}
          playsInBackground
          interruptionMode="stop"
          hideDuration
          hideSlider
        />
        <AudioPlayer
          style={{ width: 150, marginTop: 10 }}
          source={require("./assets/loop.wav")}
          playsInBackground
          interruptionMode="stop"
          hideSlider
        />
      </Section>
      <Section style={{}} title="Local asset value">
        <AudioPlayer
          source={require("./assets/loop.wav")}
          playsInBackground
          interruptionMode="stop"
        />
      </Section>
      <Section style={{}} title="Remote value">
        <AudioPlayer
          source={{
            uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
          }}
        />
      </Section>
      <Section style={{}} title="Headless">
        <AudioPlayer
          ref={audioPlayerRef}
          source={{
            uri: "https://static.draftbit.com/audio/intro-to-draftbit-audio.mp3",
          }}
          mode="headless"
          onPlaybackStatusUpdate={(state) => {
            setHeadlessState(state);
          }}
        />
        <ButtonSolid
          title="Toggle playback headless"
          onPress={() => {
            audioPlayerRef?.current?.togglePlayback();
          }}
        />
        <ButtonSolid
          title="Seek headless to 30 second mark"
          onPress={() => {
            audioPlayerRef?.current?.seekToPosition(30000);
          }}
        />
        <Text>{`Current headless state: ${JSON.stringify(
          headlessState
        )}`}</Text>
      </Section>
    </Container>
  );
}
