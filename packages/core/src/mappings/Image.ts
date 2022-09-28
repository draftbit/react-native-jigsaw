import {
  COMPONENT_TYPES,
  createImageProp,
  createResizeModeProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  category: COMPONENT_TYPES.media,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
  ],
  layout: {
    width: 100,
    height: 100,
  },
  props: {
    source: createImageProp(),
    resizeMode: createResizeModeProp(),
  },
};
