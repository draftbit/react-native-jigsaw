import {
  COMPONENT_TYPES,
  createSVGProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "SVG",
  tag: "SVG",
  description: "An SVG component",
  category: COMPONENT_TYPES.media,
  layout: {
    width: 100,
    height: 100,
  },
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
  ],
  props: {
    source: createSVGProp(),
  },
};
