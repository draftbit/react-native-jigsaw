import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
  TEXT_INPUT_PROPS,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Text Area",
  tag: "TextInput",
  description: "An input field that allows for multiple lines.",
  category: COMPONENT_TYPES.basic,
  layout: { flex: 1 },
  triggers: [Triggers.OnChangeText],
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
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "textInputValue",
      handlerPropName: "onChangeText",
    },
  },
};
