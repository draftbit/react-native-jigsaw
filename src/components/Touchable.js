import React from "react";
import { View } from "react-native";
import Touchable from "react-native-platform-touchable";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default class extends Touchable {
  render() {
    const { children, ...props } = this.props;

    return (
      <Touchable {...props}>
        <View>{children}</View>
      </Touchable>
    );
  }
}

export const SEED_DATA = {
  name: "Touchable",
  tag: "Touchable",
  description:
    "Provides a way to capture tapping gestures, and displays feedback when a gesture is recognized",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    onPress: {
      label: "onPress handler",
      description: "Function to be called when Touchable is pressed",
      editable: true,
      required: false,
      value: "{this.onPress}",
      type: FORM_TYPES.function
    },
    hitSlop: {
      label: "Hit Slop",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      type: FORM_TYPES.position,
      value: null
    }
  }
};
