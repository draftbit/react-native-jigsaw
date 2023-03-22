import { COMPONENT_TYPES, StylesPanelSections } from "@draftbit/types";

export const SEED_DATA = {
  name: "Deck Swiper Card",
  tag: "DeckSwiperCard",
  description: "Single Deck Swiper Card item to be used in DeckSwiper",
  category: COMPONENT_TYPES.swiper,
  stylesPanelSections: [
    StylesPanelSections.LayoutFlexItems,
    StylesPanelSections.LayoutContent,
    StylesPanelSections.Background,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Borders,
    StylesPanelSections.Effects,
  ],
  layout: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 2,
  },
  props: {},
};
