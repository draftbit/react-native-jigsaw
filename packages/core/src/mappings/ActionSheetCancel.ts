import {
  COMPONENT_TYPES,
  createActionProp,
  createColorProp,
  createTextProp,
  GROUPS,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Action Sheet Cancel",
  tag: "ActionSheetCancel",
  description: "Action Sheet cancel",
  category: COMPONENT_TYPES.actionsheet,
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    label: createTextProp({
      group: GROUPS.basic,
      label: "Label",
      defaultValue: "Cancel",
    }),
    color: createColorProp({
      label: "Font Color",
    }),
  },
};
