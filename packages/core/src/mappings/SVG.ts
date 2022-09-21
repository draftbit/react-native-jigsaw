import { COMPONENT_TYPES, createSvgProp } from "@draftbit/types";

export const SEED_DATA = {
  name: "SVG",
  tag: "SVG",
  description: "An SVG component",
  category: COMPONENT_TYPES.media,
  layout: {
    width: 100,
    height: 100,
  },
  props: {
    source: createSvgProp(),
  },
};
