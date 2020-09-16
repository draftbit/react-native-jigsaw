import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";

export const SEED_DATA = {
  name: "SafeAreaView",
  tag: "SafeAreaView",
  description: "A basic View that handles safe area",
  category: COMPONENT_TYPES.container,
  props: {
    edges: {
      group: GROUPS.basic,
      name: "edges",
      label: "edges",
      description: "Provides edges to be used by safe area view",
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      options: ["right", "bottom", "left", "top"],
      defaultValue: ["right", "bottom", "left", "top"],
    },
    mode: {
      group: GROUPS.basic,
      name: "mode",
      label: "mode",
      description: "Mode used by safe area view",
      editable: true,
      required: false,
      options: ["padding", "margin"],
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "padding",
    },
  },
};
