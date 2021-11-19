import { COMPONENT_TYPES, createSourceProp } from "@draftbit/types";

export const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Render web content inside a view",
  category: COMPONENT_TYPES.media,
  layout: { flex: 1 },
  props: {
    source: createSourceProp({
      defaultValue: "https://reactnative.dev",
    }),
  },
};
