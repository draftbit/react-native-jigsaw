import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export const SEED_DATA = {
  name: "Image Background",
  tag: "ImageBackground",
  doc_link:
    "https://docs.expo.io/versions/latest/react-native/imagebackground/",
  code_link:
    "https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js",
  description:
    "A very simple drop-in replacement for Image that allows you to use an Image as a background.",
  category: COMPONENT_TYPES.media,
  supports_list_render: false,
  layout: { width: "100%", height: "100%" },
  props: {
    source: {
      label: "Image Source",
      description: "The source of the image",
      editable: true,
      required: true,
      formType: FORM_TYPES.localImage,
      value: null,
    },
    resizeMode: {
      label: "Resize Mode",
      description:
        "Determines how to resize the image when the frame doesn't match the raw image dimensions",
      editable: true,
      required: false,
      value: "cover",
      formType: FORM_TYPES.flatArray,
      options: ["cover", "contain", "stretch", "repeat", "center"],
    },
    backfaceVisibility: {
      label: "Backface Visibility",
      description: "When animating a card, show the back face of it",
      editable: false,
      required: false,
      value: null,
      formType: FORM_TYPES.flatArray,
      options: ["visible", "hidden"],
    },
    backgroundColor: {
      label: "Background Color",
      description: "If no image is chosen render a colored background.",
      editable: true,
      required: false,
      value: null,
      formType: FORM_TYPES.color,
    },
  },
};
