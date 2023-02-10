import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  GROUPS,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Action Sheet",
  tag: "ActionSheet",
  description: "Action Sheet container",
  category: COMPONENT_TYPES.actionsheet,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  props: {
    visible: createStaticBoolProp({
      group: GROUPS.data,
      label: "Show Action Sheet",
    }),
  },
};
