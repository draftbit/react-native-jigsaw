import {
  COMPONENT_TYPES,
  createIconProp,
  createColorProp,
  GROUPS,
  createBoolProp,
  createIconSizeProp,
  createActionProp,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "FAB",
  tag: "FAB",
  category: COMPONENT_TYPES.button,
  description: "A mini round icon FAB",
  layout: {},
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    disabled: createBoolProp({
      label: "Disabled",
      group: GROUPS.basic,
    }),
    loading: createBoolProp({
      label: "Loading",
      group: GROUPS.basic,
    }),
    iconName: createIconProp({
      label: "Icon",
      defaultValue: null,
      group: GROUPS.basic,
    }),
    iconColor: createColorProp({
      label: "Icon color",
      defaultValue: null,
      group: GROUPS.basic,
    }),
    bgColor: createColorProp({
      label: "Background color",
      defaultValue: null,
      group: GROUPS.basic,
    }),
    iconSize: createIconSizeProp(),
  },
};
