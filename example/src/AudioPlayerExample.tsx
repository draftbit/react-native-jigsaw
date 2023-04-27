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
      <Section title="Local asset value">
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
          playsInBackground
          interruptionMode="stop"
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
      </Section>
      <Section title="Remote value">
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
      </Section>
      <Section title="Headless">
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
