import { COMPONENT_TYPES, NB_LAYOUT_STYLES_SECTIONS } from "@draftbit/types";

export const SEED_DATA = {
  name: "Box",
  tag: "Box",
  description:
    "This is a generic component for low level layout needs. It is similar to a div in HTML",
  packageName: "native-base",
  category: COMPONENT_TYPES.NBLayout,
  stylesPanelSections: NB_LAYOUT_STYLES_SECTIONS,
  layout: {},
  props: {
    bgColor: createColorProp({
      label: "Open text color",
    }),
  },
};
