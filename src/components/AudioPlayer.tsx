import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";

export default function AudioPlayer({ source }) {
  const [sound, setSound] = React.useState();
  const [playing, setPlay] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [durationMillis, setDurationMillis] = React.useState(0);
  const [isDraggingSlider, setIsDraggingSlider] = React.useState(false);
  const [sliderPositionMillis, setSliderPositionMillis] = React.useState(0);

  function onPlaybackStatusUpdate(playbackStatus) {
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        console.log(
          `Encountered a fatal error during playback: ${playbackStatus.error}`
        );
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      // Update your UI for the loaded state

      if (playbackStatus.isPlaying) {
        // Update your UI for the playing state
      } else {
        // Update your UI for the paused state
      }

      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }

      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    }
  }

  const setOnPlaybackStatusUpdate = () => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }
  };

  async function loadSound() {
    setLoading(true);
    const { sound, status } = await Audio.Sound.createAsync(source);
    console.log(status);
    setSound(sound);
    setLoading(false);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    setPlay(true);

    setOnPlaybackStatusUpdate();

    setDurationMillis(sound.durationMillis);
  }

  async function playSound() {
    if (playing) {
      await sound.pauseAsync();
      setPlay(false);
      return;
    }

    if (sound) {
      await sound.playAsync();
      setPlay(true);
      return;
    }

    await loadSound();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  React.useEffect(() => {
    setOnPlaybackStatusUpdate();
  }, [isDraggingSlider]);

  const onSliderChange = () => {
    if (!isDraggingSlider) {
      setIsDraggingSlider(true);
    }
  };

  const setTrackPosition = async (positionMillis) => {
    if (sound) {
      await sound.setPositionAsync(positionMillis);
    }
  };

  const onSlidingComplete = (sliderValue) => {
    if (isDraggingSlider) {
      setIsDraggingSlider(false);
    }
    setTrackPosition(sliderValue);
  };

  const iconName = loading ? "loading1" : !sound || !playing ? "play" : "pause";

  return (
    <View style={styles.container}>
      <Pressable
        onPress={playSound}
        style={{ cursor: "pointer", marginRight: 8 }}
      >
        <AntDesign name={iconName} size={24} />
      </Pressable>
      <Slider
        minimumTrackTintColor="#eee"
        maximumTrackTintColor="#000000"
        thumbTintColor="black"
        minimumValue={0}
        value={sliderPositionMillis}
        maximumValue={durationMillis}
        onValueChange={onSliderChange}
        onSlidingComplete={onSlidingComplete}
      />
    </View>
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
});

export const SEED_DATA = {
  name: "Audio Player",
  tag: "AudioPlayer",
  description: "Given a URL, plays sounds",
  category: COMPONENT_TYPES.media,
  layout: {},
  props: {
    source: {
      group: GROUPS.data,
      label: "URL",
      description: "The url of the sound",
      editable: true,
      required: true,
      defaultValue:
        "https://hwcdn.libsyn.com/p/9/e/2/9e224ffb4f3625c8/Nerdist_644_-_Ted_Melfi.mp3?c_id=8473543&cs_id=8473543&destination_id=18174&expiration=1607628092&hwt=f8327d4f551ec81f902e666647dc76f5",
      formType: FORM_TYPES.sourceUrl,
      propType: PROP_TYPES.OBJECT,
    },
  },
};
