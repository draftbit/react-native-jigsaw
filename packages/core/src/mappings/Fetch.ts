import { COMPONENT_TYPES, StylesPanelSections } from "@draftbit/types";
/* TODO remove, still used inside the builder in a weird way */
export const SEED_DATA = {
  name: "Fetch",
  tag: "Fetch",
  description:
    "Rest API Declarative Fetch component. Uses react-request internally",
  category: COMPONENT_TYPES.data,
  stylesPanelSections: [StylesPanelSections.NoStyles],
  layout: {
    minHeight: 40,
  },
  props: {},
};
