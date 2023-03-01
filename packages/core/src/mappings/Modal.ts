import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createBoolProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Modal",
  tag: "Modal",
  description: "A basic Modal Component",
  category: COMPONENT_TYPES.layout,
  stylesPanelSections: [StylesPanelSections.NoStyles],
  props: {
    animationType: {
      group: GROUPS.basic,
      label: "Animation Type",
      description: "Animation Type",
      options: ["slide", "fade", "none"],
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "none",
    },
    transparent: createBoolProp({
      group: GROUPS.basic,
      label: "Transparent",
      description:
        "Determines whether the modal will fill the entire view. Setting this to true will render the modal over a transparent background",
    }),
    visible: createBoolProp({
      group: GROUPS.data,
      label: "Visible",
      description: "Determines whether the modal is visible",
    }),
    presentationStyle: {
      group: GROUPS.basic,
      label: "Presentation Style",
      description: "Presentation Style",
      options: ["fullScreen", "pageSheet", "formSheet", "overFullScreen"],
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
  },
};
