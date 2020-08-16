import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export const SEED_DATA = {
  name: "Activity Indicator",
  tag: "ActivityIndicator",
  description: "Displays a circular loading indicator.",
  doc_link:
    "https://docs.expo.io/versions/latest/react-native/activityindicator/",
  code_link:
    "https://github.com/expo/expo/blob/master/ios/versioned-react-native/ABI32_0_0/Libraries/Components/ActivityIndicator/ActivityIndicator.js",
  category: COMPONENT_TYPES.formControl,
  supports_list_render: false,
  layout: { width: 36, height: 36 },
  props: {
    size: {
      group: GROUPS.basic,
      label: "Size",
      description: "The size of the loading indicator (Default: small)",
      options: ["small", "large"],
      formType: FORM_TYPES.flatArray,
      editable: true,
      required: false,
      defaultValue: "small",
    },
    animating: {
      group: GROUPS.basic,
      label: "Spinning",
      description: "Whether to show the loading indicator (Default: true)",
      formType: FORM_TYPES.boolean,
      editable: true,
      required: false,
      defaultValue: true,
    },
    hidesWhenStopped: {
      group: GROUPS.basic,
      label: "Hide When Stopped",
      description:
        "Whether the indicator should hide when not animating (Default: true)",
      formType: FORM_TYPES.boolean,
      editable: true,
      required: false,
      defaultValue: true,
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "The color of the loading indicator (Default: gray)",
      formType: FORM_TYPES.color,
      editable: true,
      required: false,
      defaultValue: null,
    },
  },
};
