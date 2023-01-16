import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  Triggers,
  createActionProp,
  createStaticNumberProp,
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
  triggers: [Triggers.OnRefresh, Triggers.OnEndReached],
  props: {
    onRefresh: createActionProp(),
    onEndReached: createActionProp(),
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
  },
};
