import {
  createTextProp,
  createTextStyle,
  createRowDirectionProp,
  createFieldNameProp,
  COMPONENT_TYPES,
  Triggers,
  createColorProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Checkbox Row",
  tag: "CheckboxRow",
  category: COMPONENT_TYPES.input,
  layout: {
    minHeight: 50,
  },
  triggers: [Triggers.OnPress],
  props: {
    label: createTextProp({
      label: "Label",
      description: "Label to show with the checkbox",
      required: true,
      defaultValue: "First Option",
    }),
    labelStyle: createTextStyle({
      label: "Label Style",
      description: "Change the styles of the label",
      required: false,
      editable: false,
    }),
    direction: createRowDirectionProp(),
    fieldName: createFieldNameProp({
      defaultValue: "checkboxValue",
      valuePropName: "value",
      handlerPropName: "onPress",
    }),
    color: createColorProp({
      description: "Color for the button (used when the checkbox is checked)",
    }),
    uncheckedColor: createColorProp({
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
    }),
  },
};
