import {
  COMPONENT_TYPES,
  createResizeModeProp,
  createColorProp,
  BLOCK_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Carousel",
    tag: "Carousel",
    category: COMPONENT_TYPES.deprecated,
    stylesPanelSections: BLOCK_STYLES_SECTIONS,
    description: "A horizontal scrolling carousel of images",
    layout: {
      height: 250,
    },
    props: {
      resizeMode: createResizeModeProp(),
      dotColor: createColorProp({
        label: "Dot color",
      }),
    },
  },
];
