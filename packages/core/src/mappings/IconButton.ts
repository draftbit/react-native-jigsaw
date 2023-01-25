import {
  COMPONENT_TYPES,
  GROUPS,
  createIconProp,
  createColorProp,
  createNumberProp,
  createActionProp,
  Triggers,
  StylesPanelSections,
  createDisabledProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Icon Button",
  tag: "IconButton",
  category: COMPONENT_TYPES.button,
  layout: {},
  triggers: [Triggers.OnPress, Triggers.OnLongPress],
  stylesPanelSections: [
    StylesPanelSections.Margins,
    StylesPanelSections.Effects,
    StylesPanelSections.Position,
  ],
  props: {
    onPress: createActionProp(),
    onLongPress: createActionProp(),
    disabled: createDisabledProp(),
    icon: createIconProp(),
    color: createColorProp({
      label: "Color",
      group: GROUPS.basic,
    }),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 32,
      min: 16,
      max: 256,
      step: 1,
      precision: 0,
    }),
  },
};
