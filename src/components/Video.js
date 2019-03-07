import { Video } from "expo";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export default Video;

export const SEED_DATA = {
  name: "Video",
  tag: "Video",
  description: "Given a URL, display a video",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    source: {
      label: "Video URL",
      description: "The URL the video should load",
      editable: true,
      required: true,
      value: "",
      type: FORM_TYPES.sourceUrl
    },
    rate: {
      label: "Rate",
      description:
        "The playback rate of the media. This value must be between 0.0 and 32.0 (Default: 1)",
      editable: true,
      required: true,
      value: 1,
      type: FORM_TYPES.number
    },
    volume: {
      label: "Volume",
      description:
        "The volume of the audio for this media. This value must be between 0.0 (silence) and 1.0 (maximum volume). (Default: .5)",
      editable: true,
      required: false,
      value: 0.5,
      type: FORM_TYPES.number
    },
    isMuted: {
      label: "Is Muted",
      description: "To mute the audio of the video.",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    resizeMode: {
      label: "Resize Mode",
      description:
        "How the video should be scaled for display. (Default: stretch) ",
      editable: true,
      required: true,
      value: "stretch",
      options: ["stretch", "contain", "cover"],
      type: FORM_TYPES.flatArray
    },
    useNativeControls: {
      label: "Use Native Controls",
      description: "Allow users to have the option to pause or play the video",
      editable: true,
      required: true,
      value: false,
      type: FORM_TYPES.boolean
    },
    shouldPlay: {
      label: "Play on Load",
      description: "Allows the video play on load",
      editable: true,
      required: false,
      value: true,
      type: FORM_TYPES.boolean
    },
    isLooping: {
      label: "Looping",
      description: "Allows the video to loop",
      editable: true,
      required: true,
      value: false,
      type: FORM_TYPES.boolean
    },
    posterSource: {
      label: "Thumbnail Source",
      description: "Thumbnail Source",
      editable: true,
      required: false,
      value: "",
      type: FORM_TYPES.localImage
    }, //?
    usePoster: {
      label: "Thumbnail",
      description: "Thumbnail for the video",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    positionMillis: {
      label: "Starting Point",
      description: "Set a certian starting point of the video",
      editable: true,
      required: false,
      value: 0,
      type: FORM_TYPES.number
    }
  }
};
