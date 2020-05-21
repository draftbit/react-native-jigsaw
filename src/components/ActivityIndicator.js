import { ActivityIndicator } from "react-native";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export default ActivityIndicator;

const SEED_DATA = {
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
      label: "Size",
      description: "The size of the loading indicator (Default: small)",
      options: ["small", "large"],
      type: FORM_TYPES.flatArray,
      editable: true,
      required: false,
      value: "small",
    },
    animating: {
      label: "Spinning",
      description: "Whether to show the loading indicator (Default: true)",
      type: FORM_TYPES.boolean,
      editable: true,
      required: false,
      value: true,
    },
    hidesWhenStopped: {
      label: "Hide When Stopped",
      description:
        "Whether the indicator should hide when not animating (Default: true)",
      type: FORM_TYPES.boolean,
      editable: true,
      required: false,
      value: true,
    },
    color: {
      label: "Color",
      description: "The color of the loading indicator (Default: gray)",
      type: FORM_TYPES.color,
      editable: true,
      required: false,
      value: null,
    },
  },
};
