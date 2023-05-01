import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { withTheme } from "../../theming";
import Slider from "@react-native-community/slider";
import HeadlessAudioPlayer from "./HeadlessAudioPlayer";
import {
  AudioPlayerInterfaceProps,
  AudioPlayerStatus,
  HeadlessAudioPlayerProps,
  HeadlessAudioPlayerRef,
} from "./AudioPlayerCommon";
import Pressable from "../Pressable";

/**
 * Built on top of HeadlessAudioPlayer to provide a simple interface for playing audio
 */
const AudioPlayerWithInterface = React.forwardRef<
  HeadlessAudioPlayerRef,
  AudioPlayerInterfaceProps & HeadlessAudioPlayerProps
>(
  (
    {
      style,
      theme,
      thumbColor = theme.colors.primary,
      completedTrackColor = theme.colors.primary,
      remainingTrackColor = theme.colors.divider,
      togglePlaybackIconSize = 24,
      togglePlaybackIconColor = theme.colors.primary,
      onPlaybackStatusUpdate: onPlaybackStatusUpdateProp,
      onPlaybackFinish: onPlaybackFinishProp,
      hidePlaybackIcon = false,
      hideDuration = false,
      hideSlider = false,
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

    let iconName;
    if (isLoading) {
      iconName = "loading1";
    } else if (isPlaying) {
      iconName = "pause";
    } else {
      iconName = "play";
    }

    return (
      <>
        <HeadlessAudioPlayer
          {...rest}
          ref={headlessAudioPlayerRef}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          onPlaybackFinish={onPlaybackFinish}
        />
        <View
          style={[
            {
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.divider,
            },
            styles.container,
            viewStyles,
          ]}
        >
          {!hidePlaybackIcon && (
            <Pressable
              onPress={() => headlessAudioPlayerRef.current?.togglePlayback()}
              style={styles.spacingEnd}
            >
              <AntDesign
                name={iconName as any}
                size={togglePlaybackIconSize}
                color={togglePlaybackIconColor}
              />
            </Pressable>
          )}
          {!hideDuration && (
            <Text
              style={[
                { color: theme.colors.strong },
                styles.spacingEnd,
                { ...textStyles },
              ]}
            >
              {formatDuration(sliderPositionMillis ?? 0)} /{" "}
              {formatDuration(durationMillis || 0)}
            </Text>
          )}
          {!hideSlider && (
            <Slider
              style={styles.slider}
              minimumTrackTintColor={completedTrackColor}
              maximumTrackTintColor={remainingTrackColor}
              thumbTintColor={thumbColor}
              minimumValue={0}
              value={sliderPositionMillis}
              maximumValue={durationMillis}
              onValueChange={onSliderChange}
              onSlidingComplete={onSlidingComplete}
            />
          )}
        </View>
      </>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  spacingEnd: {
    marginEnd: 8,
  },
  slider: {
    flex: 1,
  },
});

function formatDuration(duration: number) {
  if (duration === 0) return "00:00";

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

export default withTheme(AudioPlayerWithInterface);
