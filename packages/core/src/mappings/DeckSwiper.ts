import {
  COMPONENT_TYPES,
  Triggers,
  createActionProp,
  createStaticNumberProp,
  createStaticBoolProp,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Deck Swiper",
  tag: "DeckSwiper",
  description: "Deck swiper container",
  category: COMPONENT_TYPES.swiper,
  stylesPanelSections: BLOCK_STYLES_SECTIONS,
  triggers: [Triggers.OnIndexChanged, Triggers.OnEndReached],
  props: {
    onIndexChanged: createActionProp({
      label: "On index changed",
      description: "Action to execute when swipe to new index",
    }),
    onEndReached: createActionProp({
      label: "On end reached",
      description: "Action to execute when end of swiping reached",
    }),
    startCardIndex: createStaticNumberProp({
      label: "Start card index",
      description: "Index of card to start swiping from",
      defaultValue: 0,
    }),
    infiniteSwiping: createStaticBoolProp({
      label: "Infinite swiping",
      description: "Whether to infinitley loop through cards or not",
    }),
    verticalEnabled: createStaticBoolProp({
      label: "Vertical swipe enabled",
      description: "Whether cards should be swipeable vertically or not",
      defaultValue: true,
    }),
    horizontalEnabled: createStaticBoolProp({
      label: "Horizontal swipe enabled",
      description: "Whether cards should be swipeable horizontally or not",
      defaultValue: true,
    }),
    visibleCardCount: createStaticNumberProp({
      label: "Visible card count",
      description:
        "Number of cards visible behind (and including) the current card",
      defaultValue: 1,
      min: 1,
      step: 1,
    }),
  },
};
