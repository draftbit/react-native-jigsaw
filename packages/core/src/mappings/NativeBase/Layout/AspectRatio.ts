import { COMPONENT_TYPES, NB_LAYOUT_STYLES_SECTIONS } from "@draftbit/types";

export const SEED_DATA = {
  name: "Aspect Ratio",
  tag: "AspectRatio",
  description:
    "AspectRatio controls the size of the undefined dimension of a node or child component.",
  category: COMPONENT_TYPES.NBLayout,
  stylesPanelSections: NB_LAYOUT_STYLES_SECTIONS,
  packageName: "native-base",
  layout: {},
  props: {
    bgColor: createColorProp({
      label: "Open text color",
    }),
  },
};
