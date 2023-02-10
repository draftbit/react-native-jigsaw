import {
  COMPONENT_TYPES,
  createActionProp,
  createColorProp,
  createTextProp,
  GROUPS,
  Triggers,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Action Sheet Item",
  tag: "ActionSheetItem",
  description: "Action Sheet item",
  category: COMPONENT_TYPES.actionsheet,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  triggers: [Triggers.OnPress],
  layout: {
    textAlign: "center",
  },
  props: {
    onPress: createActionProp(),
    label: createTextProp({
      group: GROUPS.basic,
      label: "Label",
      defaultValue: "Option",
    }),
    color: createColorProp({
      label: "Font Color",
      defaultValue: "strong",
    }),
  },
};
