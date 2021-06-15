import { COMPONENT_TYPES, createStaticBoolProp } from "@draftbit/types";

export const SEED_DATA = {
  name: "Scroll View",
  tag: "ScrollView",
  description: "A basic ScrollView component",
  category: COMPONENT_TYPES.layout,
  layout: {},
  props: {
    horizontal: createStaticBoolProp({
      label: "Horizontal",
      description: "Render your list horizontally",
      defaultValue: false,
    }),
    showsHorizontalScrollIndicator: createStaticBoolProp({
      label: "Show Horizontal Scroll Indicator",
      description:
        "When true, shows a horizontal scroll indicator. The default value is true.",
      defaultValue: false,
    }),
    showsVerticalScrollIndicator: createStaticBoolProp({
      label: "Show Vertical Scroll Indicator",
      description:
        "When true, shows a vertical scroll indicator. The default value is true.",
      defaultValue: true,
    }),
    bounces: createStaticBoolProp({
      label: "Bounce",
      description:
        "When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction.",
      defaultValue: true,
    }),
  },
};
