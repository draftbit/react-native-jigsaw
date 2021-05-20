import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";
import Config from "./Config";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createImageProp,
} from "@draftbit/types";

interface Props {
  source?: string | ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const CircleImage: React.FC<Props> = ({
  source = Config.placeholderImageURL,
  size = 60,
  style,
  ...props
}) => {
  const borderRadius = size / 2;

  return (
    <Image
      style={[{ width: size, height: size, borderRadius }, style]}
      source={typeof source === "string" ? { uri: source } : source}
      resizeMode="cover"
      {...props}
    />
  );
};

export default CircleImage;

export const SEED_DATA = {
  name: "Circle Image",
  tag: "CircleImage",
  description: "A circle image",
  category: COMPONENT_TYPES.media,
  props: {
    source: createImageProp(),
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "Size of your circle image",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 60,
    },
  },
};
