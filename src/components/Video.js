import { Video } from "expo";
import {
  COMPONENT_TYPES,
  FORM_TYPES
} from "../core/component-types";
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
      uri: FORM_TYPES.sourceUrl
    },
    rate: FORM_TYPES.number,
    volume: FORM_TYPES.number,
    isMuted: FORM_TYPES.boolean,
    resizeMode: FORM_TYPES.select,
    style={
      width: FORM_TYPES.number,
      height: FORM_TYPES.number
    },
    shouldPlay: FORM_TYPES.boolean,
    isLooping: FORM_TYPES.isLooping
  }
};
