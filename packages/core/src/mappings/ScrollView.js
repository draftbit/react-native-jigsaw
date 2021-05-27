import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "ScrollView",
  tag: "ScrollView",
  description: "A basic ScrollView component",
  category: COMPONENT_TYPES.layout,
  layout: {
    flex: 1,
  },
  props: {
    horizontal: {
      group: GROUPS.basic,
      label: "Horizontal",
      description: "Render scrollview horizontally",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: false,
    },
    showsHorizontalScrollIndicator: {
      group: GROUPS.basic,
      label: "Show Horizontal Scroll Indicator",
      description:
        "When true, shows a horizontal scroll indicator. The default value is true.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: true,
    },
    showsVerticalScrollIndicator: {
      group: GROUPS.basic,
      label: "Show Vertical Scroll Indicator",
      description:
        "When true, shows a vertical scroll indicator. The default value is true.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: true,
    },
    bounces: {
      group: GROUPS.basic,
      label: "Bounce",
      description:
        "When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: true,
    },
  },
};
