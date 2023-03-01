import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  createTextProp,
  PROP_TYPES,
  createFieldNameProp,
  createDirectionProp,
  Triggers,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Checkbox Group",
  tag: "CheckboxGroup",
  category: COMPONENT_TYPES.deprecated,
  layout: {},
  triggers: [Triggers.OnValueChange],
  stylesPanelSections: [StylesPanelSections.Margins],
  props: {
    direction: createDirectionProp(),
    values: createTextProp({
      group: GROUPS.data,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.ARRAY,
      label: "Values",
      description: "Currently selected values of the checkbox group",
      required: true,
      defaultValue: null,
    }),
    fieldName: createFieldNameProp({
      defaultValue: "checkboxGroupValue",
      handlerPropName: "onValueChange",
      valuePropName: "value",
    }),
  },
};
