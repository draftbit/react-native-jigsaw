import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "List",
  tag: "FlatList",
  description: "A basic List component",
  category: COMPONENT_TYPES.data,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    flex: 1,
  },
  props: {
    horizontal: createStaticBoolProp({
      label: "Horizontal",
      description: "Render list horizontally",
    }),
    inverted: createStaticBoolProp({
      label: "Inverted",
      description: "If true, reverses the direction.",
    }),
    numColumns: createNumColumnsType({
      editable: true,
    }),
  },
};
