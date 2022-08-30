import {
  COMPONENT_TYPES,
  createActionProp,
  Triggers,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Touchable",
  tag: "Touchable",
  description: "Simple button with no styles",
  category: COMPONENT_TYPES.button,
  stylesPanelSections: [
    StylesPanelSections.Size,
    StylesPanelSections.Margins,
    StylesPanelSections.Borders,
  ],
  layout: {},
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
  },
};
