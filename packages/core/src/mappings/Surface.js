import { COMPONENT_TYPES, createElevationType } from "@draftbit/types";

export const SEED_DATA = {
  name: "Surface",
  tag: "Surface",
  description: "An elevated container",
  category: COMPONENT_TYPES.layout,
  layout: {},
  props: {
    elevation: createElevationType(0),
  },
};
