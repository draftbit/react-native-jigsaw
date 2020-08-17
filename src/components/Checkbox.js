// @ts-nocheck
import * as React from "react";
import { Platform } from "react-native";
import CheckboxAndroid from "./CheckboxAndroid";
import CheckboxIOS from "./CheckboxIOS";
import { withTheme } from "../core/theming";

import {
  GROUPS,
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
  layout: null,
  props: {
    disabled: {
      group: GROUPS.data,
      label: "Disabled",
      description: "Whether checkbox is disabled",
      editable: true,
      required: false,
      defaultValue: false,
      formType: FORM_TYPES.boolean,
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "Custom color for Checkbox",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      defaultValue: null,
    },
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "checkboxValue",
      valuePropName: "status",
      handlerPropName: "onPress",
    },
  },
};
