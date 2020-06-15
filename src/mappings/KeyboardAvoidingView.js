import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export const SEED_DATA = {
  name: "Keyboard Avoiding View",
  tag: "KeyboardAvoidingView",
  description: "View that moves out of the way of the virtual keyboard. ",
  category: COMPONENT_TYPES.layout,
  supports_list_render: false,
  layout: {},
  props: {
    enabled: {
      label: "Enable",
      description: "Enable the keyboard avoiding view",
      editable: true,
      required: true,
      value: true,
      type: FORM_TYPES.boolean,
    },
    behavior: {
      label: "Resizing Behavior",
      description:
        "The behavior for how the keyboard resizing interacts with the rest of the screen. (Default: padding).",
      editable: true,
      required: true,
      value: "padding",
      options: ["padding", "position", "height"],
      type: FORM_TYPES.flatArray,
    },
    keyboardVerticalOffset: {
      label: "Keyboard Vertical Offset",
      description:
        "The distance between the bottom of the view and the keyboard",
      editable: true,
      required: false,
      value: 0,
      type: FORM_TYPES.number,
    },
  },
};
