/* @flow */

import * as React from "react";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Config from "./Config";
import IconButton from "./IconButton";

type Props = {|
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

class RadioButton extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props;

    if (onPress) {
      onPress();
    }
  };

  render() {
    const {
      selected,
      disabled,
      onPress,
      theme: { colors }
    } = this.props;

    return (
      <IconButton
        icon={selected ? "MaterialIcons/radio-button-checked" : "MaterialIcons/radio-button-unchecked"}
        color={selected ? colors.primary : colors.light}
        disabled={disabled}
        size={Config.radioButtonSize}
        onPress={this.onPress}
      />
    );
  }
}

export default withTheme(RadioButton);

export const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: COMPONENT_TYPES.formControl,
  preview_image_url:
    "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
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
    width: 24,
    height: 24
  }
};
