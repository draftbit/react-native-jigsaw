import {
  COMPONENT_TYPES,
  GROUPS,
  createIconProp,
  createColorProp,
  createNumberProp,
  createBoolProp,
  createActionProp,
  Triggers,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Icon Button",
  tag: "IconButton",
  category: COMPONENT_TYPES.button,
  layout: {},
  triggers: [Triggers.OnPress],
  props: {
    onPress: createActionProp(),
    icon: createIconProp(),
    color: createColorProp({
      label: "Color",
      group: GROUPS.basic,
    }),
    disabled: createBoolProp({
      label: "Disabled",
      group: GROUPS.basic,
    }),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 32,
      min: 16,
      max: 128,
      step: 1,
      precision: 0,
    }),
  },
};
