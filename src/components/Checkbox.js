import * as React from "react";
import { Platform } from "react-native";
import CheckboxAndroid from "./CheckboxAndroid";
import CheckboxIOS from "./CheckboxIOS";
import { withTheme } from "../core/theming";

import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "../core/component-types";

class Checkbox extends React.Component {
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
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Control_Checkbox.png",
  props: {
    disabled: {
      label: "Disabled",
      description: "Whether checkbox is disabled",
      editable: true,
      required: false,
      value: false,
      type: FORM_TYPES.boolean,
    },
    color: {
      label: "Color",
      description: "Custom color for Checkbox",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
    },
    fieldName: {
      ...FIELD_NAME,
      value: "checkboxValue",
      valuePropName: "status",
      handlerPropName: "onPress",
    },
  },
  layout: {},
};
