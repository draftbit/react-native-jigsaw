import { KeyboardAvoidingView } from "react-native";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export default KeyboardAvoidingView;

export const SEED_DATA = {
  name: "KeyboardAvoidingView",
  tag: "KeyboardAvodidingView",
  description: "View that moves out of the way of the virtual keyboard. ",
  type: COMPONENT_TYPES.primitive,
  supports_list_render: false,
  layout: {},
  props: {
    enabled: {
      label: "Enable avoiding",
      description: "Enable the avoiding state",
      editable: true,
      required: true,
      value: true,
      type: FORM_TYPES.boolean
    },
    keyboardVerticalOffset: {
      label: "Keyboard Vertical Offset",
      description:
        "The distance between the bottom of the view and the keyboard",
      editable: true,
      required: false,
      value: 0,
      type: FORM_TYPES.number
    }
  }
};
