import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
  ComponentManifest,
} from "../core/component-types";

export const SEED_DATA: ComponentManifest = {
  name: "List",
  tag: "FlatList",
  description: "A basic List component",
  category: COMPONENT_TYPES.data,
  props: {
    horizontal: {
      group: GROUPS.basic,
      label: "Horizontal",
      description: "Render list horizontally",
      editable: true,
      required: true,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: false,
    },
    numColumns: {
      group: GROUPS.basic,
      label: "Number of columns",
      description: "Number of columns (vertical list only)",
      editable: true,
      required: false,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      min: 1,
      max: 4,
      step: 1,
      precision: 0,
      defaultValue: null,
    },
  },
};
