/* @flow */

import * as React from "react";
import { View, Image, Text } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../core/component-types";
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
  static defaultProps = {
    value: 0
  };

  handleMinus = () => {
    const { value, onMinus } = this.props;

    if (value > 0) {
      onMinus(value - 1);
    }
  };

  handlePlus = () => {
    const { value, onPlus } = this.props;

    onPlus(value + 1);
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
          icon="MaterialIcons/remove"
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
          icon="MaterialIcons/add"
          onPress={this.handlePlus}
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
    preview_image_url: "{CLOUDINARY_URL}/Control_Stepper.png",
    supports_list_render: false,
    props: {
      fieldName: {
        ...FIELD_NAME,
        value: "stepperValue"
      }
    },
    layout: {
      width: 126,
      height: 42
    }
  }
];
