import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  GROUPS,
  StylesPanelSections,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Action Sheet",
  tag: "ActionSheet",
  description: "Action Sheet container",
  category: COMPONENT_TYPES.actionsheet,
  stylesPanelSections: [StylesPanelSections.Size, StylesPanelSections.Margins],
  props: {
    visible: createStaticBoolProp({
      group: GROUPS.data,
      label: "Show Action Sheet",
    }),
  },
};
