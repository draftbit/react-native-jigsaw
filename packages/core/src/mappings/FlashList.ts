import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
  createNumberProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  GROUPS,
  Triggers,
  createActionProp,
  createStaticNumberProp,
  createColorProp,
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
    triggers: [Triggers.OnRefresh, Triggers.OnEndReached],
    props: {
      onRefresh: createActionProp(),
      onEndReached: createActionProp(),
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
      initialNumToRender: createStaticNumberProp({
        label: "Initial Num To Render",
        description: "How many items to render in the initial batch",
        defaultValue: null,
      }),
      onEndReachedThreshold: createStaticNumberProp({
        label: "End Reached Threshold",
        description:
          "How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.",
        defaultValue: 0.5,
      }),
      refreshColor: createColorProp({
        label: "Refreshing Color",
        description: "Color of the refresh indicator",
      }),
      showsHorizontalScrollIndicator: createStaticBoolProp({
        label: "Show Horizontal Scroll Indicator",
        description:
          "When true, shows a horizontal scroll indicator. The default value is true.",
        defaultValue: true,
      }),
      showsVerticalScrollIndicator: createStaticBoolProp({
        label: "Show Vertical Scroll Indicator",
        description:
          "When true, shows a vertical scroll indicator. The default value is true.",
        defaultValue: true,
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
    triggers: [Triggers.OnRefresh, Triggers.OnEndReached],
    props: {
      onRefresh: createActionProp(),
      onEndReached: createActionProp(),
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
      initialNumToRender: createStaticNumberProp({
        label: "Initial Num To Render",
        description: "How many items to render in the initial batch",
        defaultValue: null,
      }),
      onEndReachedThreshold: createStaticNumberProp({
        label: "End Reached Threshold",
        description:
          "How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.",
        defaultValue: 0.5,
      }),
      refreshColor: createColorProp({
        label: "Refreshing Color",
        description: "Color of the refresh indicator",
      }),
      showsHorizontalScrollIndicator: createStaticBoolProp({
        label: "Show Horizontal Scroll Indicator",
        description:
          "When true, shows a horizontal scroll indicator. The default value is true.",
        defaultValue: true,
      }),
      showsVerticalScrollIndicator: createStaticBoolProp({
        label: "Show Vertical Scroll Indicator",
        description:
          "When true, shows a vertical scroll indicator. The default value is true.",
        defaultValue: true,
      }),
    },
  },
];
