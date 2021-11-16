import {
  COMPONENT_TYPES,
  createFieldNameProp,
  createDirectionProp,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.input,
  layout: {},
  triggers: [Triggers.OnValueChange],
  props: {
    direction: createDirectionProp(),
    fieldName: createFieldNameProp({
      handlerPropName: "onValueChange",
      valuePropName: "value",
      defaultValue: "radioButtonGroupValue",
    }),
  },
};
