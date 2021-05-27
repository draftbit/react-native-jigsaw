import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Activity Indicator",
  tag: "ActivityIndicator",
  description: "Displays a circular loading indicator.",
  doc_link:
    "https://docs.expo.io/versions/latest/react-native/activityindicator/",
  code_link:
    "https://github.com/expo/expo/blob/master/ios/versioned-react-native/ABI32_0_0/Libraries/Components/ActivityIndicator/ActivityIndicator.js",
  category: COMPONENT_TYPES.input,
  layout: { width: 36, height: 36 },
  props: {
    size: {
      label: "Size",
      description: "The size of the loading indicator (Default: small)",
      options: ["small", "large"],
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      editable: true,
      required: false,
      defaultValue: "small",
      group: GROUPS.basic,
    },
    animating: {
      label: "Spinning",
      description: "Whether to show the loading indicator (Default: true)",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      editable: true,
      required: false,
      defaultValue: true,
      group: GROUPS.basic,
    },
    hidesWhenStopped: {
      label: "Hide When Stopped",
      description:
        "Whether the indicator should hide when not animating (Default: true)",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      editable: true,
      required: false,
      defaultValue: true,
      group: GROUPS.basic,
    },
    color: {
      label: "Color",
      description: "The color of the loading indicator (Default: gray)",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: null,
      group: GROUPS.basic,
    },
  },
};
