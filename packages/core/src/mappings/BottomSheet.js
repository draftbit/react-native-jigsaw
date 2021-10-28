import { COMPONENT_TYPES, createNumberProp } from "@draftbit/types";

export const SEED_DATA = {
  name: "Bottom Sheet",
  tag: "BotttomSheet",
  category: COMPONENT_TYPES.container,
  props: {
    step: createNumberProp({
      label: "Step",
      description: "Step can be -1, 0, 1, or 2.",
    }),
  },
};
