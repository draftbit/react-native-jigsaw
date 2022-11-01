import * as React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  StyleProp,
  StyleSheet,
} from "react-native";
import { Audio, AVPlaybackStatus, AVPlaybackSource } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

import type { Sound } from "expo-av/build/Audio/Sound";

interface Props {
  source: AVPlaybackSource;
  style?: StyleProp<any>;
  sliderColor?: string;
  completedTrackColor?: string;
  remainingTrackColor?: string;
  playSize?: number;
  playColor?: string;
}

function formatDuration(duration: number) {
  if (duration === 0 || duration === 1) return "00:00";

  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const renderedHours = hours < 10 ? "0" + hours : hours;
  const renderedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const renderedSeconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 0) {
    return renderedHours + ":" + renderedMinutes + ":" + renderedSeconds;
  }

  return renderedMinutes + ":" + renderedSeconds;
}

export default function AudioPlayer({
  source,
  style = {},
  sliderColor = "black",
  completedTrackColor = "black",
  remainingTrackColor = "black",
  playSize = 24,
  playColor = "black",
}: Props) {
  const [sound, setSound] = React.useState<Sound>();
  const [playing, setPlay] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [durationMillis, setDurationMillis] = React.useState<
    number | undefined
  >(1);
  const [isDraggingSlider, setIsDraggingSlider] = React.useState(false);
  const [sliderPositionMillis, setSliderPositionMillis] = React.useState(0);

  const {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
    ...viewStyles
  } = StyleSheet.flatten(style || {});

  const textStyles = {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
  };

  const onPlaybackStatusUpdate = async (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      if (durationMillis !== status?.durationMillis) {
        setDurationMillis(status?.durationMillis || 1);
      }
      if (status.isPlaying) {
        setSliderPositionMillis(status.positionMillis);
      }

      if (status.didJustFinish) {
        setSound(undefined);
        setPlay(false);
        setSliderPositionMillis(0);

        if (sound) {
          await sound.unloadAsync();
        }
      }
    }
  };

  const setOnPlaybackStatusUpdate = () => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function loadAudio() {
    setLoading(true);

    const { sound: s, status } = await Audio.Sound.createAsync(source);
    setSound(s);
    setLoading(false);
    setOnPlaybackStatusUpdate();

    if (status.isLoaded && status.durationMillis) {
      setDurationMillis(status.durationMillis);
    }

    s.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    await s.playAsync();
    setPlay(true);
  }

  async function playSound() {
    if (sound && playing) {
      await sound.pauseAsync();
      setPlay(false);
      return;
    }

    if (sound && !playing) {
      await sound.playAsync();
      setPlay(true);
      return;
    }

    await loadAudio();
  }

  const setTrackPosition = async (positionMillis: number) => {
    if (sound) {
      await sound.setPositionAsync(positionMillis);
    }
  };

  const onSlidingComplete = (sliderValue: number) => {
    if (isDraggingSlider) {
      setIsDraggingSlider(false);
    }
    setTrackPosition(sliderValue);
  };

  const onSliderChange = () => {
    if (!isDraggingSlider) {
      setIsDraggingSlider(true);
    }
  };

  const iconName = loading ? "loading1" : !sound || !playing ? "play" : "pause";

  return (
    <View style={[styles.container, viewStyles]}>
      <TouchableHighlight onPress={playSound} style={{ marginRight: 8 }}>
        <AntDesign name={iconName} size={playSize} color={playColor} />
      </TouchableHighlight>
      <Text style={{ marginRight: 8, ...textStyles }}>
        {formatDuration(sliderPositionMillis ?? 0)} /{" "}
        {formatDuration(durationMillis || 0)}
      </Text>
      <Slider
        style={{ flex: 1 }}
        minimumTrackTintColor={completedTrackColor}
        maximumTrackTintColor={remainingTrackColor}
        thumbTintColor={sliderColor}
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
    flexDirection: "row",
    alignItems: "center",
  },
});
