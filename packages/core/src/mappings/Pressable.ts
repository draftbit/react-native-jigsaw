import {
  COMPONENT_TYPES,
  createActionProp,
  Triggers,
  createNumberProp,
  StylesPanelSections,
} from "@draftbit/types";

const SEED_DATA_PROPS = {
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Borders,
  ],
  layout: {},
  triggers: [Triggers.OnPress, Triggers.OnLongPress],
  props: {
    onPress: createActionProp(),
    onLongPress: createActionProp(),
    activeOpacity: createNumberProp(),
    disabledOpacity: createNumberProp(),
    delayLongPress: createNumberProp(),
    hitSlop: createNumberProp(),
  },
};

export const SEED_DATA = [
  {
    name: "Touchable",
    tag: "Touchable",
    description: "An interactive view with no styles",
    category: COMPONENT_TYPES.deprecated,
    ...SEED_DATA_PROPS,
  },
  {
    name: "Pressable",
    tag: "Pressable",
    description: "An interactive view with no styles",
    category: COMPONENT_TYPES.button,
    ...SEED_DATA_PROPS,
  },
];
