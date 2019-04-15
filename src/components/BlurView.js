import { BlurView } from "expo";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
export default BlurView;

export const SEED_DATA = {
  name: "Blur View",
  tag: "BlurView",
  doc_link: "https://docs.expo.io/versions/latest/sdk/blur-view/",
  code_link:
    "https://github.com/expo/expo/blob/master/packages/expo/src/effects/BlurView.d.ts",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    tint: {
      label: "Tint",
      description: "The tint of the blur view",
      editable: true,
      required: true,
      value: "default",
      type: FORM_TYPES.flatArray,
      options: ["default", "light", "dark"]
    },
    intensity: {
      label: "Intensity",
      description:
        "A number from 1 to 100 that controls the intensity of the blur effect",
      editable: true,
      required: true,
      value: 50,
      type: FORM_TYPES.number,
      min: 0,
      max: 100,
      step: 1,
      precision: 0
    }
  }
};
