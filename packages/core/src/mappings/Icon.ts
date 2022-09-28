import {
  COMPONENT_TYPES,
  GROUPS,
  createNumberProp,
  createColorProp,
  createIconProp,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Icon",
  tag: "Icon",
  description: "An icon",
  category: COMPONENT_TYPES.basic,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Background,
    StylesPanelSections.Position,
    StylesPanelSections.Effects,
  ],
  layout: {},
  props: {
    name: {
      ...createIconProp(),
      group: GROUPS.data,
    },
    color: createColorProp(),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 24,
      min: 1,
      max: 128,
      step: 1,
      precision: 0,
    }),
  },
};
