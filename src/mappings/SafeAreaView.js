import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";
import { SEED_DATA as VIEW_SEED_DATA } from "./View";

export const SEED_DATA = {
  name: "SafeAreaView",
  tag: "SafeAreaView",
  description: "A basic View that handles safe area",
  category: COMPONENT_TYPES.basic,
  props: {
    ...VIEW_SEED_DATA.props,
    edges: {
      group: GROUPS.basic,
      name: "edges",
      label: "edges",
      description: "Provides edges to be used by safe area view",
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
    mode: {
      group: GROUPS.basic,
      name: "mode",
      label: "mode",
      description: "Mode used by safe area view",
      editable: true,
      required: false,
      options: ["padding", "margin"],
      formType: FORM_TYPES.select,
      propType: PROP_TYPES.STRING,
      defaultValue: "padding",
    },
  },
};
