/* @flow */

import * as React from "react";
import { View, Image, Text } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import IconButton from "./IconButton";
import Config from "./Config";
import type { Theme } from "../types";

type Props = {
  value: number,
  onPlus: () => void,
  onMinus: () => void,
  style?: any,
  theme: Theme
};

class Stepper extends React.Component<Props> {
  handleMinus = () => {
    const { value, onMinus } = this.props;

    if (value > 0) {
      onMinus();
    }
  };

  render() {
    const {
      value,
      onPlus,
      theme: { colors, spacing, typography },
      style
    } = this.props;

    return (
      <View style={[{ flexDirection: "row" }, style]}>
        <IconButton
          icon="remove"
          onPress={this.handleMinus}
          size={Config.stepperButtonSize}
          color={colors.strong}
          disabled={value === 0}
        />
        <Text
          style={[
            typography.body1,
            {
              textAlign: "center",
              alignSelf: "center",
              color: colors.medium,
              marginHorizontal: spacing.medium
            }
          ]}
        >
          {value}
        </Text>
        <IconButton
          icon="add"
          onPress={onPlus}
          size={Config.stepperButtonSize}
          color={colors.strong}
        />
      </View>
    );
  }
}

export default withTheme(Stepper);

export const SEED_DATA = [
  {
    name: "Stepper",
    tag: "Stepper",
    description: "A component used to control the quantity of something",
    category: COMPONENT_TYPES.field,
    preview_image_url:
      "https://res.cloudinary.com/altos/image/upload/v1541096671/draftbit/library/jigsaw-1.0/reps/Control_Stepper.png",
    supports_list_render: false,
    props: {
      value: {
        label: "Value",
        description: "Current value of stepper",
        type: FORM_TYPES.number,
        value: 0,
        min: 0,
        max: 999,
        step: 1,
        precision: 0,
        editable: true
      },
      onMinus: {
        label: "Stepper onMinus Function",
        description: "Function to run when minus button pressed",
        editable: true,
        type: FORM_TYPES.function,
        value: "{this.onMinus}"
      },
      onPlus: {
        label: "Stepper onPlus Function",
        description: "Function to run when minus button pressed",
        editable: true,
        type: FORM_TYPES.function,
        value: "{this.onPlus}"
      }
    },
    layout: {
      width: 126,
      height: 42
    }
  }
];
