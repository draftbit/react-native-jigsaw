/* @flow */

import * as React from "react";
import { View, Text } from "react-native";
import color from "color";
import { withTheme } from "../core/theming";
import Touchable from "./Touchable";
import RadioButton from "./RadioButton";
import type { Theme } from "../types";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

type Props = {|
  /**
   * Title to display alongside radio button
   */
  title?: string,
  /**
   * Status of radio button
   */
  selected: boolean,
  /**
   * Whether the radio button is disabled.
   */
  disabled?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * @optional
   */
  theme: Theme
|};

class FieldRadioButton extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props;

    if (onPress) {
      onPress();
    }
  };

  render() {
    const {
      title,
      selected,
      disabled,
      onPress,
      theme: { colors, typography, spacing, disabledOpacity }
    } = this.props;

    let titleColor = selected ? colors.medium : colors.light;

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string();
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={{ flexDirection: "row" }}>
          <RadioButton selected={selected} disabled={disabled} />
          <Text
            style={[
              typography.body1,
              { color: titleColor, marginLeft: spacing.medium }
            ]}
          >
            {title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

export default withTheme(FieldRadioButton);

export const SEED_DATA = {
  name: "Field Radio Button",
  tag: "FieldRadioButton",
  category: COMPONENT_TYPES.button,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/v1541096663/draftbit/library/jigsaw-1.0/reps/Field_Radio.png",
  props: {
    title: {
      label: "Title",
      description: "Title to display alongside radio button",
      required: false,
      editable: true,
      value: "Title",
      type: FORM_TYPES.string
    },
    selected: {
      label: "Selected",
      description: "Whether the radio button is selected",
      required: true,
      editable: true,
      value: true,
      type: FORM_TYPES.boolean
    },
    disabled: {
      label: "Disabled",
      description: "Whether radio button is disabled",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean
    },
    onPress: {
      label: "OnPress handler",
      description: "Function that is called when radio button pressed",
      editable: true,
      required: false,
      value: "{this.onPress}",
      type: FORM_TYPES.function
    }
  },
  layout: {
    width: 343,
    height: 59
  }
};
