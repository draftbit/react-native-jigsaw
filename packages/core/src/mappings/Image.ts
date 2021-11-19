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
    width: 250,
    height: 250,
  },
  props: {
    source: createImageProp(),
    resizeMode: createResizeModeProp(),
  },
};
