import { ImageBackground } from "react-native";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  BORDER_RADIUS_MODE
} from "../core/component-types";
export default ImageBackground;

export const SEED_DATA = {
  name: "Image Background",
  tag: "ImageBackground",
  description: "A very simple drop-in replacement for Image that allows you to use an Image as a background.",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  props: {
    source: {
      label: "Image Source",
      description: "The source of the image",
      editable: true,
      required: true,
      value: null,
      type: FORM_TYPES.localImage,
    },
  }
};
