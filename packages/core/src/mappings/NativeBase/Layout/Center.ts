import { COMPONENT_TYPES, NB_LAYOUT_STYLES_SECTIONS } from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Center",
    tag: "Center",
    description: "Centers its child",
    category: COMPONENT_TYPES.NBLayout,
    stylesPanelSections: NB_LAYOUT_STYLES_SECTIONS,
    packageName: "native-base",
  },
  {
    name: "Square",
    tag: "Square",
    description: "Centers its child inside a square",
    category: COMPONENT_TYPES.NBLayout,
    stylesPanelSections: NB_LAYOUT_STYLES_SECTIONS,
    packageName: "native-base",
  },
  {
    name: "Circle",
    tag: "Circle",
    description: "Centers its child inside a circle",
    category: COMPONENT_TYPES.NBLayout,
    stylesPanelSections: NB_LAYOUT_STYLES_SECTIONS,
    packageName: "native-base",
  },
];
