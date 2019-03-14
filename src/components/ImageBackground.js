import { ImageBackground } from "react-native";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default ImageBackground;

export const SEED_DATA = {
  name: "Image Background",
  tag: "ImageBackground",
  doc_link:
    "https://docs.expo.io/versions/v32.0.0/react-native/imagebackground/",
  code_link:
    "https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js",
  description:
    "A very simple drop-in replacement for Image that allows you to use an Image as a background.",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    width: "100%",
    height: "100%"
  },
  props: {
    source: {
      label: "Image Source",
      description: "The source of the image",
      editable: true,
      required: true,
      type: FORM_TYPES.localImage,
      value: null
    },
    resizeMode: {
      label: "Resize Mode",
      description:
        "Determines how to resize the image when the frame doesn't match the raw image dimensions",
      editable: true,
      required: false,
      value: "cover",
      type: FORM_TYPES.flatArray,
      options: ["cover", "contain", "stretch", "repeat", "center"]
    },
    opacity: {
      label: "Opacity",
      description: "Changes the opacity",
      editable: true,
      required: false,
      value: 100,
      type: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 1,
      precision: 0
    },
    overflow: {
      label: "Overflow",
      description:
        "If the image goes outside of its container, show or hide it",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.flatArray,
      options: ["visible", "hidden"]
    },
    backfaceVisibility: {
      label: "Backface Visibility",
      description:
        "When animating a card, show the back face of it",
      editable: false,
      required: false,
      value: null,
      type: FORM_TYPES.flatArray,
      options: ["visible", "hidden"]
    },
    tintColor: {
      label: "Tint Color",
      description:
        "Changes the color of all the non transparent pixels to this color",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.color
    },
    backgroundColor: {
      label: "Background Color",
      description:
        "If no image is chosen render a colored background.,
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.color
    },
    overlayColor: {
      label: "Overlay Color",
      description:
        "When an image has rounded corners, an overlay color will fill the remaining space with a solid color",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.color
    }
  }
};
