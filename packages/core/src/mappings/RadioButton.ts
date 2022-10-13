import {
  GROUPS,
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createIconProp,
  createTextProp,
  Triggers,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: COMPONENT_TYPES.control,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  triggers: [Triggers.OnPress],
  props: {
    value: createTextProp({
      label: "Value",
      description: "Value of the radio button",
      defaultValue: null,
      required: true,
    }),
    color: createColorProp({
      group: GROUPS.basic,
      description: "Color for the button",
      defaultValue: "primary",
    }),
    unselectedColor: createColorProp({
      group: GROUPS.basic,
      label: "Unselected Color",
      description: "Unselected Color for the button",
      defaultValue: "primary",
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether radio button is disabled",
    }),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Specifies the size of the button",
      defaultValue: 24,
      min: 16,
      max: 128,
      step: 1,
      precision: 0,
    }),
    selectedIcon: createIconProp({
      label: "Selected Icon",
      description: "Icon to show when the radio button is selected",
      defaultValue: "MaterialIcons/radio-button-checked",
    }),
    unselectedIcon: createIconProp({
      label: "Unselected Icon",
      description: "Icon to show when the radio button is unselected",
      defaultValue: "MaterialIcons/radio-button-unchecked",
    }),
  },
};
