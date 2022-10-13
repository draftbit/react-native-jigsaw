import {
  COMPONENT_TYPES,
  createActionProp,
  createColorProp,
  createTextProp,
  GROUPS,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Action Sheet Item",
  tag: "ActionSheetItem",
  description: "Action Sheet item",
  category: COMPONENT_TYPES.actionsheet,
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
