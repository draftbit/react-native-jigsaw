import {
  COMPONENT_TYPES,
  createSourceProp,
  createStaticBoolProp,
} from "@draftbit/types";

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
    optimizeVideoChat: createStaticBoolProp({
      defaultValue: false,
      label: "Optimize Video Chat",
      description:
        "Allows for a better experience from web hosted video chat services",
    }),
  },
};
