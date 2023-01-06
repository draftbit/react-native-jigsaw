import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
  createNumberProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  GROUPS,
  Triggers,
  createActionProp,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Masonry List",
    tag: "MasonryFlashList",
    description: "Masonry Flashlist by Shopify",
    packageName: "@shopify/flash-list",
    category: COMPONENT_TYPES.data,
    stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
    layout: {
      flex: 1,
    },
    triggers: [
      Triggers.OnRefresh,
      Triggers.OnEndReached,
      Triggers.OnEndReachedThreshold,
      Triggers.OnViewableItemsChanged,
    ],
    props: {
      onRefresh: createActionProp(),
      onEndReached: createActionProp(),
      onEndReachedThreshold: createActionProp(),
      onViewableItemsChanged: createActionProp(),
      numColumns: createNumColumnsType({
        editable: true,
      }),
      estimatedItemSize: createNumberProp({
        group: GROUPS.basic,
        label: "Est. Item Size",
        description: "Approximate size of the items before rendering.",
        defaultValue: 50,
        step: 1,
        precision: 0,
      }),
      optimizeItemArrangement: createStaticBoolProp({
        label: "Optimize Item Arrangement",
        description:
          "If enabled, MasonryFlashList will try to reduce difference in column height by modifying item order. If true, specifying overrideItemLayout is required. Default value is false.",
      }),
    },
  },
  {
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
      onRefresh: createActionProp(),
      onEndReached: createActionProp(),
      onEndReachedThreshold: createActionProp(),
      onViewableItemsChanged: createActionProp(),
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
  },
];
