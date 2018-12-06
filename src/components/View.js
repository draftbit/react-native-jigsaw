import { View } from "react-native";
import { COMPONENT_TYPES } from "../core/component-types";
export default View;

export const SEED_DATA = {
  name: "View",
  tag: "View",
  description: "A basic View component",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  preview_image_url:
    "https://res.cloudinary.com/altos/image/upload/v1544040205/draftbit/Jigsaw/View.svg",
  layout: {
    width: 375,
    height: 100
  },
  props: {}
};
