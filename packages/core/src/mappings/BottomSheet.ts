import {
  COMPONENT_TYPES,
  createNumberProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Bottom Sheet",
  tag: "BottomSheet",
  category: COMPONENT_TYPES.container,
  stylesPanelSections: [
    StylesPanelSections.Background,
    StylesPanelSections.Borders,
    StylesPanelSections.Size,
    StylesPanelSections.MarginsAndPaddings,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
  ],
  props: {
    step: createNumberProp({
      label: "Step",
      description: "Step can be -1, 0, 1, or 2.",
    }),
  },
};
