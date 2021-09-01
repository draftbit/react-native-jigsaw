import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
  TEXT_INPUT_PROPS,
} from "@draftbit/types";
import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

const TextArea: React.FC<any> = ({ numberOfLines = 4, style, ...props }) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      numberOfLines={numberOfLines}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
  },
});

export const SEED_DATA = {
  name: "Text Area",
  tag: "TextArea",
  description: "Render Text Area",
  category: COMPONENT_TYPES.basic,
  layout: { flex: 1 },
  props: {
    ...TEXT_INPUT_PROPS,
    multiline: {
      label: "Multiline",
      description: "Multiline",
      group: GROUPS.uncategorized,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: true,
      editable: true,
      required: false,
    },
    numberOfLines: {
      label: "Number Of Lines",
      description: "Number Of Lines",
      group: GROUPS.basic,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: 4,
      editable: true,
      required: false,
    },
  },
};

export default TextArea;
