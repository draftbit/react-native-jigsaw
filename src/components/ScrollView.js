import { ScrollView } from "react-native";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export default ScrollView;

export const SEED_DATA = {
  name: "ScrollView",
  tag: "ScrollView",
  description: "A basic ScrollView component",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {
    width: "100%",
    height: "100%"
  },
  props: {
    horizontal: {
      label: "Horizontal",
      description: "Render scrollview horizontally",
      editable: true,
      required: true,
      type: FORM_TYPES.boolean,
      value: false
    }
  }
};
