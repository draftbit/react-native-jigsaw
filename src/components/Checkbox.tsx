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
  PROP_TYPES,
  FIELD_NAME,
} from "../core/component-types";
import themeI from "../styles/DefaultTheme";

interface Props extends TouchableHighlightProps {
  status: "checked" | "indeterminate" | "unchecked";
  disabled: boolean;
  onPress: () => void;
  theme: typeof themeI;
  color?: string;
}

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
      propType: PROP_TYPES.BOOLEAN,
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "Custom color for Checkbox",
      editable: true,
      required: false,
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
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
