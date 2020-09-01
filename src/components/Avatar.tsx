import * as React from "react";
import { Image, StyleProp, ImageStyle } from "react-native";
import Config from "./Config";

import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

interface Props {
  image?: string | Blob;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const Avatar: React.FC<Props> = ({
  image = Config.avatarImageUrl,
  size = Config.avatarImageSize,
  style,
}) => {
  const borderRadius = size / 2;

  return (
    <Image
      style={[{ width: size, height: size, borderRadius }, style]}
      source={typeof image === "string" ? { uri: image } : image}
      resizeMode="cover"
    />
  );
};

export default Avatar;

export const SEED_DATA = {
  name: "Avatar",
  tag: "Avatar",
  category: COMPONENT_TYPES.media,
  props: {
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 80,
    },
    image: {
      group: GROUPS.data,
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      formType: FORM_TYPES.remoteImage,
      defaultValue: "brightness-5",
    },
  },
  layout: {
    width: 80,
    height: 80,
  },
};
