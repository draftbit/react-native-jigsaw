import {
  BLOCK_STYLES_SECTIONS,
  COMPONENT_TYPES,
  createStaticBoolProp,
  createTextProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Youtube Player",
  tag: "YoutubePlayer",
  description: "Plays a youtube video form a Youtube video or playlist id",
  doc_link: "https://lonelycpp.github.io/react-native-youtube-iframe",
  code_link: "https://github.com/LonelyCpp/react-native-youtube-iframe",
  category: COMPONENT_TYPES.media,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  layout: {
    height: 250,
  },
  props: {
    videoId: createTextProp({
      label: "Video ID",
      description: "VideoId of the Youtube video.",
      defaultValue: null,
    }),
    playlist: createTextProp({
      label: "Playlist",
      description: "Playlist of the Youtube videos.",
      defaultValue: null,
    }),
    autoplay: createStaticBoolProp({
      label: "Auto Play",
      description: "Autoplay the video on load.",
      defaultValue: false,
      required: false,
    }),
  },
};
