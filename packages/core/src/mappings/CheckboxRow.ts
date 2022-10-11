import {
  createBoolProp,
  createTextProp,
  createTextStyle,
  createRowDirectionProp,
  createFieldNameProp,
  createIconProp,
  createStaticNumberProp,
  COMPONENT_TYPES,
  Triggers,
  createColorProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Checkbox Row",
  tag: "CheckboxRow",
  category: COMPONENT_TYPES.control,
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.Margins,
    StylesPanelSections.Effects,
  ],
  layout: {
    minHeight: 50,
  },
  triggers: [Triggers.OnPress, Triggers.OnCheck, Triggers.OnUncheck],
  props: {
    fieldName: createFieldNameProp({
      defaultValue: "checkboxRowValue",
      valuePropName: "value",
      handlerPropName: "onPress",
    }),
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
    color: createColorProp({
      description: "Color for the button (used when the checkbox is checked)",
    }),
    uncheckedColor: createColorProp({
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the checkbox is disabled",
    }),
    size: createStaticNumberProp({
      label: "Size",
      description: "Specifies the size of the icon",
      defaultValue: null,
    }),
    checkedIcon: createIconProp({
      label: "Checked Icon",
      description: 'Icon to show when the checkbox status is "checked"',
      defaultValue: null,
    }),
    uncheckedIcon: createIconProp({
      label: "Unchecked Icon",
      description: 'Icon to show when the checkbox status is "unchecked"',
      defaultValue: null,
    }),
  },
};
