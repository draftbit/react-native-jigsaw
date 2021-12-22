import { AudioPlayer } from "@draftbit/ui";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./Section";

export default function AudioExample() {
  return (
    <Container style={styles.container1}>
      <Text style={styles.text}>Local: </Text>
      <AudioPlayer source={require("./assets/sound.mp3")} />
      <View style={{ marginTop: 30 }}>
        <Text style={styles.text}>
          URL:
          https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3
        </Text>
        <AudioPlayer
          source={{
            uri: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
          }}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  container1: { flex: 1 },
  text: { marginBottom: 12 },
});
