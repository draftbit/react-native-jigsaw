import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  createBoolProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Modal",
  tag: "Modal",
  description: "A basic Modal Component",
  category: COMPONENT_TYPES.container,
  props: {
    animationType: {
      group: GROUPS.advanced,
      name: "animationType",
      label: "animationType",
      description: "Animation Type",
      options: ["slide", "fade", "none"],
      editable: false,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "none",
    },
    transparent: createBoolProp({
      group: GROUPS.basic,
      label: "Transparent",
      description: "Should be Transparent",
    }),
    visible: createBoolProp({
      group: GROUPS.data,
      label: "Visible",
      description: "Determines whether the modal is visible",
    }),
  },
};
