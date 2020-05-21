import React from "react";
import { View, TouchableHighlight as Touchable } from "react-native";
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
  category: COMPONENT_TYPES.input,
  supports_list_render: false,
  layout: {},
  props: {
    onPress: {
      label: "Action",
      description: "Action to execute when touchable pressed",
      editable: true,
      type: FORM_TYPES.action,
      value: null,
    },
    hitSlop: {
      label: "Hit Slop",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      type: FORM_TYPES.position,
      value: null,
    },
  },
};
