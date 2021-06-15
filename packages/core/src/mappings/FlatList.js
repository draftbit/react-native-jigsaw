import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "List",
  tag: "FlatList",
  description: "A basic List component",
  category: COMPONENT_TYPES.data,
  layout: {
    flex: 1,
  },
  props: {
    horizontal: createStaticBoolProp({
      label: "Horizontal",
      description: "Render list horizontally",
    }),
    numColumns: createNumColumnsType({
      editable: true,
    }),
  },
};
