import * as React from "react";
import {
  Image,
  View,
  StyleSheet,
  ViewProps,
  StyleProp,
  ImageStyle,
  Platform,
} from "react-native";

import {
  COMPONENT_TYPES,
  GROUPS,
  createNumberProp,
  createColorProp,
  createIconProp,
} from "@draftbit/types";

// This must use require to work in both web as a published project and in Snack
const VectorIcons = require("@expo/vector-icons");

type Props = {
  name: string | number | { uri: string };
  color?: string;
  size: number;
  style?: StyleProp<ImageStyle>;
} & ViewProps;

const Icon: React.FC<Props> = ({ name, color, size, style, ...rest }) => {
  if (!name) return null;

  let iconSet = "MaterialIcons";
  if (typeof name === "string" && name.indexOf("/") !== -1) {
    [iconSet, name] = name.split("/");
  }

  if (typeof name === "string") {
    const IconSet = VectorIcons[iconSet];

    return (
      <View style={[styles.container, { width: size, height: size }, style]}>
        <IconSet {...rest} name={name} color={color} size={size} />
      </View>
    );
  } else if (
    (typeof name === "object" &&
      name !== null &&
      Object.prototype.hasOwnProperty.call(name, "uri") &&
      typeof name.uri === "string") ||
    typeof name === "number"
  ) {
    return (
      <Image
        {...rest}
        source={name}
        style={[
          {
            width: size,
            height: size,
            tintColor: color,
          },
          style,
        ]}
      />
    );
  }

  return (
    <View
      {...rest}
      style={[
        {
          width: size,
          height: size,
        },
        styles.container,
        style,
      ]}
    >
      {name}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
});

export default Icon;

export const SEED_DATA = {
  name: "Icon",
  tag: "Icon",
  description: "An icon",
  category: COMPONENT_TYPES.basic,
  layout: {},
  props: {
    name: createIconProp(),
    color: createColorProp(),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 24,
      min: 16,
      max: 128,
      step: 1,
      precision: 0,
    }),
  },
};
