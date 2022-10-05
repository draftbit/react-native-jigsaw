import {
  createTextProp,
  createTextEnumProp,
  COMPONENT_TYPES,
  createColorProp,
  GROUPS,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Radio Button Row",
  tag: "RadioButtonRow",
  category: COMPONENT_TYPES.control,
  stylesPanelSections: [
    StylesPanelSections.Typography,
    StylesPanelSections.Margins,
    StylesPanelSections.Effects,
  ],
  layout: {},
  props: {
    label: createTextProp({
      label: "Label",
      description: "Label to show with the radio button",
      required: true,
      defaultValue: "First Option",
    }),
    direction: createTextEnumProp({
      label: "Direction",
      description:
        "Whether the checkbox will appear on the left or on the right",
      options: ["row", "row-reverse"],
    }),
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
  },
};
