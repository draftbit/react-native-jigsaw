import * as React from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import HeadlessAudioPlayer from "./HeadlessAudioPlayer";
import {
  AudioPlayerInterfaceProps,
  AudioPlayerStatus,
  HeadlessAudioPlayerProps,
  HeadlessAudioPlayerRef,
} from "./AudioPlayerCommon";

/**
 * Built on top of HeadlessAudioPlayer to provide a simple interface for playing audio
 */
const AudioPlayerWithInterface = React.forwardRef<
  HeadlessAudioPlayerRef,
  AudioPlayerInterfaceProps & HeadlessAudioPlayerProps
>(
  (
    {
      style = {},
      sliderColor = "black",
      completedTrackColor = "black",
      remainingTrackColor = "black",
      playSize = 24,
      playColor = "black",
      onPlaybackStatusUpdate: onPlaybackStatusUpdateProp,
      onPlaybackFinish: onPlaybackFinishProp,
      ...rest
    },
    ref
  ) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [durationMillis, setDurationMillis] = React.useState<
      number | undefined
    >(1);
    const [isDraggingSlider, setIsDraggingSlider] = React.useState(false);
    const [sliderPositionMillis, setSliderPositionMillis] = React.useState(0);
    const newHeadlessAudioPlayerRef =
      React.useRef<HeadlessAudioPlayerRef>(null);

    // Use the provided ref or default to new ref when not provided
    const headlessAudioPlayerRef = ref
      ? (ref as React.RefObject<HeadlessAudioPlayerRef>)
      : newHeadlessAudioPlayerRef;

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

    const onPlaybackStatusUpdate = (status: AudioPlayerStatus) => {
      setIsLoading(status.isLoading);
      setDurationMillis(status.durationMillis);
      setSliderPositionMillis(status.currentPositionMillis);
      setIsPlaying(status.isPlaying);
      onPlaybackStatusUpdateProp?.(status);
    };

    const onPlaybackFinish = () => {
      setIsPlaying(false);
      setSliderPositionMillis(0);
      headlessAudioPlayerRef.current?.togglePlayback();
      headlessAudioPlayerRef.current?.seekToPosition(0);
      onPlaybackFinishProp?.();
    };

    const onSlidingComplete = (sliderValue: number) => {
      if (isDraggingSlider) {
        setIsDraggingSlider(false);
      }
      headlessAudioPlayerRef.current?.seekToPosition(sliderValue);
    };

    const onSliderChange = () => {
      if (!isDraggingSlider) {
        setIsDraggingSlider(true);
      }
    };

    const iconName = isLoading ? "loading1" : !isPlaying ? "play" : "pause";

    return (
      <>
        <HeadlessAudioPlayer
          {...rest}
          ref={headlessAudioPlayerRef}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          onPlaybackFinish={onPlaybackFinish}
        />
        <View style={[styles.container, viewStyles]}>
          <TouchableHighlight
            onPress={() => headlessAudioPlayerRef.current?.togglePlayback()}
            style={{ marginRight: 8 }}
          >
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
      </>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

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

export default AudioPlayerWithInterface;
