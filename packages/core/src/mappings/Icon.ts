import {
  COMPONENT_TYPES,
  GROUPS,
  createNumberProp,
  createColorProp,
  createIconProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Icon",
  tag: "Icon",
  description: "An icon",
  category: COMPONENT_TYPES.basic,
  layout: {},
  props: {
    name: createIconProp(),
    color: createColorProp(),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 24,
      min: 16,
      max: 128,
      step: 1,
      precision: 0,
    }),
  },
};
