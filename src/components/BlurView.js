import { BlurView } from "expo";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  BORDER_RADIUS_MODE
} from "../core/component-types";
export default BlurView;

export const SEED_DATA = {
  name: "Blur View",
  tag: "BlurView",
  description: "Renders a blur view on iOS and a semi-transparent view on Android. Useful for navigation bars, tab bars, modals.",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    tint: {
      label: "Tint",
      description: "The tint of the blur view",
      editable: true,
      required: true,
      value: 'default',
      type: FORM_TYPES.flatArray,
      options: ['default', 'light', 'dark']
    },
    intensity: {
      label: "Intensity",
      description: "A number from 1 to 100 that controls the intensity of the blur effect",
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
