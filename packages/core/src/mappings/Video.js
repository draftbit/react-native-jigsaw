import {
  COMPONENT_TYPES,
  createBoolProp,
  createSourceProp,
  createResizeModeProp,
  createNumberProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Video",
  tag: "Video",
  description: "Given a URL, display a video",
  doc_link: "https://docs.expo.io/versions/latest/sdk/video/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo-av/src/Video.tsx",
  category: COMPONENT_TYPES.media,
  layout: {
    height: 215,
  },
  props: {
    source: createSourceProp({
      label: "Video url",
      defaultValue: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    }),
    usePoster: createBoolProp({
      label: "Use Thumbnail",
      description: "Thumbnail for the video",
    }),
    posterSource: createSourceProp({
      label: "Poster Source",
      description: "Source",
    }),
    resizeMode: createResizeModeProp(),
    isMuted: createBoolProp({
      label: "Mute Audio",
      description: "To mute the audio of the video.",
    }),
    useNativeControls: createBoolProp({
      label: "Use Native Controls",
      description: "Allow users to have the option to pause or play the video",
    }),
    shouldPlay: createBoolProp({
      label: "Play on Load",
      description: "Allows the video play on loading",
    }),
    isLooping: createBoolProp({
      label: "Allow Looping",
      description: "Allows the video to loop",
    }),
    positionMillis: createNumberProp({
      label: "Starting Point",
      description: "Set a certian starting point of the video",
      min: 0,
      step: 0.01,
      precision: 2,
    }),
    rate: createNumberProp({
      label: "Playback Rate",
      description:
        "The playback rate of the media. This value must be between 0.0 and 32.0 (Default: 1)",
      min: 0,
      max: 32,
      step: 0.25,
      precision: 2,
    }),
    volume: createNumberProp({
      label: "Volume",
      description:
        "The volume of the audio for this media. This value must be between 0.0 (silence) and 1.0 (maximum volume). (Default: .5)",
      min: 0,
      max: 1,
      step: 0.1,
      precision: 1,
    }),
  },
};
