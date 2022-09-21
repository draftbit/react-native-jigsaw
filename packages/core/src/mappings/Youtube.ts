import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  createTextProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Youtube",
  tag: "Youtube",
  description: "Given a VideoId orPlaylist and play Youtube video",
  doc_link: "https://lonelycpp.github.io/react-native-youtube-iframe",
  code_link:
    "https://github.com/LonelyCpp/react-native-youtube-iframehttps://github.com/LonelyCpp/react-native-youtube-iframe",
  category: COMPONENT_TYPES.media,
  stylesPanelSections: [StylesPanelSections.Size],
  layout: {
    height: 250,
  },
  props: {
    videoId: createTextProp({
      label: "Video ID",
      description: "VideoId of the Youtube video.",
      defaultValue: "nwMUpDESXrI",
    }),
    playlist: createTextProp({
      label: "Playlist",
      description: "Playlist of the Youtube videos.",
      defaultValue: "PLUa6TiXzjIrwowt6P-uGCJm8ovm-9S1Ks",
    }),
    mute: createStaticBoolProp({
      label: "Mute Audio",
      description: "Mute the audio of the video.",
    }),
    autoplay: createStaticBoolProp({
      label: "Auto Play",
      description: "Autoplay the video on load.",
    }),
  },
};
