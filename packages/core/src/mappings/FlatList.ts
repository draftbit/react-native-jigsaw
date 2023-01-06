import {
  COMPONENT_TYPES,
  createNumColumnsType,
  createStaticBoolProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
  Triggers,
  createActionProp,
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
    initialNumToRender: createStaticBoolProp({
      label: "Initial Num To Render",
      descriprion: "How many items to render in the initial batch",
    }),
  },
};
