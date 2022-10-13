import {
  COMPONENT_TYPES,
  createElevationType,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Surface",
  tag: "Surface",
  description: "An elevated container",
  category: COMPONENT_TYPES.container,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  layout: {
    minHeight: 40,
  },
  props: {
    elevation: createElevationType(0),
  },
};
