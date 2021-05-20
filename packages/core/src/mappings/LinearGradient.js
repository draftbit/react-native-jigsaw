import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "@draftbit/types";

export const SEED_DATA = {
  name: "Linear Gradient",
  tag: "LinearGradient",
  doc_link: "https://docs.expo.io/versions/latest/sdk/linear-gradient/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo/src/effects/LinearGradient.d.ts",
  category: COMPONENT_TYPES.layout,
  supports_list_render: false,
  layout: {},
  props: {
    colors: {
      group: GROUPS.basic,
      label: "Colors",
      description: "The colors required for your gradient",
      editable: true,
      required: true,
      defaultValue: null,
      formType: FORM_TYPES.gradient,
    },
  },
};
