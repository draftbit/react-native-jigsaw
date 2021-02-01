import React from "react";
import {
  View,
  TouchableOpacity as Touchable,
  TouchableOpacityProps,
} from "react-native";
import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "@draftbit/types";

export default class extends React.Component<TouchableOpacityProps> {
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
      group: GROUPS.basic,
      label: "Action",
      description: "Action to execute when touchable pressed",
      editable: true,
      required: false,
      formType: FORM_TYPES.action,
      defaultValue: null,
    },
    hitSlop: {
      group: GROUPS.advanced,
      label: "Hit Slop",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      formType: FORM_TYPES.position,
      defaultValue: null,
    },
  },
};
