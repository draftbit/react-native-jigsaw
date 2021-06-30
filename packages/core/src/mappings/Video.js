import {
  COMPONENT_TYPES,
  createStaticBoolProp,
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
      label: "Source",
      description: "The source of the video data to display.",
      defaultValue: "http://static.draftbit.com/videos/intro-to-draftbit.mp4",
    }),
    usePoster: createStaticBoolProp({
      label: "Thumbnail",
      description: "Show a thumbnail before the video starts.",
      defaultValue: true,
    }),
    posterSource: createSourceProp({
      label: "Thumbnail Source",
      description:
        "The optional image to display over the video while it is loading.",
      defaultValue: "https://static.draftbit.com/videos/intro-to-draftbit.png",
    }),
    resizeMode: createResizeModeProp(),
    isMuted: createStaticBoolProp({
      label: "Mute Audio",
      description: "Mute the audio of the video.",
    }),
    useNativeControls: createStaticBoolProp({
      label: "Use Native Controls",
      description:
        "Display the playback controls, allowing users to play or pause the video.",
    }),
    shouldPlay: createStaticBoolProp({
      label: "Play Automatically",
      description: "Start playing the video after loading is finished.",
    }),
    isLooping: createStaticBoolProp({
      label: "Loop Video",
      description: "Automatically replay the video.",
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
