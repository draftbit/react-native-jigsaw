import { COMPONENT_TYPES, StylesPanelSections } from "@draftbit/types";

export const SEED_DATA = {
  name: "Swiper Item",
  tag: "SwiperItem",
  description: "Swiper item",
  category: COMPONENT_TYPES.swiper,
  props: {},
  stylesPanelSections: [
    StylesPanelSections.LayoutFlexItems,
    StylesPanelSections.LayoutSelectedItem,
    StylesPanelSections.LayoutContent,
    StylesPanelSections.Background,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
    StylesPanelSections.Borders,
    StylesPanelSections.Effects,
  ],
};
