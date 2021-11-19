import {
  COMPONENT_TYPES,
  createResizeModeProp,
  createColorProp,
} from "@draftbit/types";

export const SEED_DATA = [
  {
    name: "Carousel",
    tag: "Carousel",
    category: COMPONENT_TYPES.media,
    description: "A horizontal scrolling carousel of images",
    layout: {},
    props: {
      resizeMode: createResizeModeProp(),
      dotColor: createColorProp({
        label: "Dot color",
      }),
    },
  },
];
