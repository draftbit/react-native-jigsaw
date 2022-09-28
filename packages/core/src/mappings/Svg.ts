import {
  COMPONENT_TYPES,
  createSvgProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "SVG",
  tag: "SVG",
  description: "An SVG component",
  packageName: "@draftbit/core",
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
    source: createSvgProp(),
  },
};
