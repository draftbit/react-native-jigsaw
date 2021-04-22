import { COMPONENT_TYPES, createSourceProp } from "../core/component-types";

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Embed a website into your app",
  category: COMPONENT_TYPES.media,
  layout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  props: {
    source: createSourceProp(),
  },
};
