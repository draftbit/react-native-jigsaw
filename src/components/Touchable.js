import React from "react";
import Touchable from "react-native-platform-touchable";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default class extends Touchable {
  render() {
    const {
      children,
      hitSlopTop,
      hitSlopLeft,
      hitSlopRight,
      hitSlopBottom,
      ...props
    } = this.props;

    const hitSlop = {
      top: hitSlopTop,
      left: hitSlopLeft,
      right: hitSlopRight,
      bottom: hitSlopBottom
    };

    return (
      <Touchable hitSlop={hitSlop} {...props}>
        {children}
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
    hitSlopTop: {
      label: "Hit Slop - Top",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      value: null,
      min: 0,
      max: 20,
      step: 1,
      precision: 0
    },
    hitSlopLeft: {
      label: "Hit Slop - Left",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      value: null,
      min: 0,
      max: 20,
      step: 1,
      precision: 0
    },
    hitSlopRight: {
      label: "Hit Slop - Right",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      value: null,
      min: 0,
      max: 20,
      step: 1,
      precision: 0
    },
    hitSlopBottom: {
      label: "Hit Slop - Bottom",
      description:
        "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      value: null,
      min: 0,
      max: 20,
      step: 1,
      precision: 0
    }
  }
};
