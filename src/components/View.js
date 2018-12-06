import { View } from "react-native";
import { COMPONENT_TYPES } from "../core/component-types";
export default View;

export const SEED_DATA = {
  name: "View",
  tag: "View",
  description: "A basic View component",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    width: 375,
    height: 100
  },
  props: {}
};
