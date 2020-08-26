import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
  createNumColumnsType,
} from "../core/component-types";

export const SEED_DATA = {
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
    numColumns: createNumColumnsType({
      group: GROUPS.basic,
      editable: true,
      required: true,
      description: "Number of columns (vertical list only)",
    }),
  },
};
