import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
  createColorProp,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Accordion Item",
  tag: "AccordionItem",
  description: "Item to be used in Accordion",
  category: COMPONENT_TYPES.deprecated,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  props: {
    icon: createIconProp(),
    label: createTextProp({
      label: "Item label",
    }),
    iconColor: createColorProp({
      label: "Icon color",
    }),
  },
};
