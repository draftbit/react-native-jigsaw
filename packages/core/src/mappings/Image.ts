import {
  COMPONENT_TYPES,
  createImageProp,
  createResizeModeProp,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  category: COMPONENT_TYPES.media,
  layout: {
    width: 100,
    height: 100,
  },
  props: {
    source: createImageProp(),
    resizeMode: createResizeModeProp(),
  },
};
