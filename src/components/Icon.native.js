import * as React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import * as VectorIcons from "@expo/vector-icons";
// console.log("VECTORICONS", VectorIcons);

import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

let VectorIcons;

try {
  // Optionally require vector-icons
  VectorIcons = require("@expo/vector-icons");
} catch (e) {
  if (
    // @ts-ignore
    global.__expo &&
    // @ts-ignore
    global.__expo.Icon
  ) {
    // Snack doesn't properly bundle vector icons from subpath
    // Use icons from the __expo global if available
    // @ts-ignore
    VectorIcons = global.__expo.Icon;
  } else {
    let isErrorLogged = false;

    // Fallback component for icons
    // @ts-ignore
    VectorIcons = ({ name, color, size, style, ...rest }) => {
      if (!isErrorLogged) {
        if (
          !/(Cannot find module|Module not found|Cannot resolve module)/.test(
            e.message
          )
        ) {
          console.error(e);
        }

        console.warn(
          `Tried to use the icon '${name}' in a component from '@draftbit/ui', but '@expo/vector-icons' could not be loaded.`,
          `To remove this warning, try installing '@expo/vector-icons'`
        );

        isErrorLogged = true;
      }

      return (
        <Text
          {...rest}
          style={[{ color, fontSize: size }, style]}
          // @ts-ignore
          pointerEvents="none"
        >
          □
        </Text>
      );
    };
  }
}

const Icon = ({ name, color, size, style, ...rest }) => {
  if (!name) return null;

  let iconSet = "MaterialIcons";
  if (name.indexOf("/") !== -1) {
    [iconSet, name] = name.split("/");
  }

  if (typeof name === "string") {
    const IconSet = VectorIcons[iconSet];

    return (
      <IconSet {...rest} name={name} color={color} size={size} style={style} />
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

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export const SEED_DATA = {
  name: "Icon",
  tag: "Icon",
  description: "An icon",
  category: COMPONENT_TYPES.basic,
  preview_image_url: "{CLOUDINARY_URL}/Icon.png",
  supports_list_render: false,
  props: {
    name: {
      label: "Name",
      description: "Name of the icon",
      type: FORM_TYPES.icon,
      value: null,
      editable: true,
      required: true,
    },
    color: {
      label: "Color",
      description: "Color of the icon",
      type: FORM_TYPES.color,
      value: "strong",
      editable: true,
      required: true,
    },
    size: {
      label: "Size",
      description: "Width and height of the icon",
      type: FORM_TYPES.number,
      value: 24,
      min: 1,
      max: 200,
      step: 1,
      precision: 0,
      editable: true,
      required: true,
    },
  },
  layout: {
    width: 24,
    height: 24,
  },
};
