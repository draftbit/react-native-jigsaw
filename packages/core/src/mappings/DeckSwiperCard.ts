import {
  COMPONENT_TYPES,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Deck Swiper Card",
  tag: "DeckSwiperCard",
  description: "Single Deck Swiper Card item to be used in DeckSwiper",
  category: COMPONENT_TYPES.swiper,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 2,
  },
  props: {},
};
