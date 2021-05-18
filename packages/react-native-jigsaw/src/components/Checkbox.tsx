import * as React from "react";
import { Platform, TouchableOpacityProps } from "react-native";
import CheckboxAndroid from "./CheckboxAndroid";
import CheckboxIOS from "./CheckboxIOS";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
} from "../core/component-types";

type Props = {
  status?: "checked" | "indeterminate" | "unchecked";
  disabled?: boolean;
  onPress?: () => void;
  color?: string;
} & TouchableOpacityProps;

export default function Checkbox(props: Props) {
  return Platform.OS === "ios" ? (
    <CheckboxIOS {...props} />
  ) : (
    <CheckboxAndroid {...props} />
  );
}

export const SEED_DATA = {
  name: "Checkbox",
  tag: "Checkbox",
  category: COMPONENT_TYPES.deprecated,
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
