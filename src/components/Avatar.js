import * as React from "react";
import { Image } from "react-native";
import Config from "./Config";

import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default class Avatar extends React.PureComponent {
  static defaultProps = {
    image: Config.avatarImageUrl,
    size: Config.avatarImageSize,
  };

  render() {
    const { image, size, style } = this.props;
    const borderRadius = size / 2;

    return (
      <Image
        style={[{ width: size, height: size, borderRadius }, style]}
        source={typeof image === "string" ? { uri: image } : image}
        resizeMode="cover"
      />
    );
  }
}

export const SEED_DATA = {
  name: "Avatar",
  tag: "Avatar",
  category: COMPONENT_TYPES.media,
  props: {
    size: {
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      value: 80,
    },
    image: {
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      type: FORM_TYPES.remoteImage,
      value: "brightness-5",
    },
  },
  layout: {
    width: 80,
    height: 80,
  },
};
