import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
  createNumberProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "FlashList",
  tag: "FlashList",
  description: "Flashlist by Shopify",
  packageName: "@shopify/flash-list",
  category: COMPONENT_TYPES.data,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    flex: 1,
  },
  props: {
    estimatedItemSize: createNumberProp({
      group: GROUPS.basic,
      label: "Est. Item Size",
      description: "Approximate size of the items before rendering.",
      defaultValue: 50,
      step: 1,
      precision: 0,
    }),
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
