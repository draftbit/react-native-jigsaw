import React from "react";
import { Image as NativeImage } from "react-native";
import Config from "./Config";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default class Image extends React.PureComponent {
  static defaultProps = {
    source: Config.placeholderImageURL,
    resizeMode: "cover",
  };

  render() {
    const { source, ...props } = this.props;
    return (
      <NativeImage
        source={typeof source === "string" ? { uri: source } : source}
        {...props}
      />
    );
  }
}

export const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  category: COMPONENT_TYPES.media,
  supports_list_render: false,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/Image.png",
  layout: {
    width: 250,
    height: 250,
  },
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
  },
};
