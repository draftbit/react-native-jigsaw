/* @flow */

import * as React from "react";
import { Platform } from "react-native";
import CheckboxAndroid from "./CheckboxAndroid";
import CheckboxIOS from "./CheckboxIOS";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

type Props = {|
  /**
   * Status of checkbox.
   */
  status: "checked" | "unchecked" | "indeterminate",
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * Custom color for unchecked checkbox.
   */
  uncheckedColor?: string,
  /**
   * Custom color for checkbox.
   */
  color?: string,
  /**
   * @optional
   */
  theme: Theme
|};

class Checkbox extends React.Component<Props> {
  // @component ./CheckboxAndroid.js
  static Android = CheckboxAndroid;

  // @component ./CheckboxIOS.js
  static IOS = CheckboxIOS;

  render() {
    return Platform.OS === "ios" ? (
      <CheckboxIOS {...this.props} />
    ) : (
      <CheckboxAndroid {...this.props} />
    );
  }
}

export default withTheme(Checkbox);

export const SEED_DATA = {
  name: "Checkbox",
  tag: "Checkbox",
  category: COMPONENT_TYPES.formControl,
  preview_image_url:
    "{CLOUDINARY_URL}/Control_Checkbox.png",
  props: {
    status: {
      label: "Status",
      description: "Status of checkbox",
      required: true,
      editable: true,
      value: "checked",
      type: FORM_TYPES.flatArray,
      options: ["checked", "unchecked", "indeterminate"]
    },
    disabled: {
      label: "Disabled",
      description: "Whether checkbox is disabled",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean
    },
    color: {
      label: "Color",
      description: "Custom color for Checkbox",
      editable: true,
      required: false,
      type: FORM_TYPES.color
    },
    onPress: {
      label: "onPress handler",
      description: "Function that handles checking or unchecking",
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
