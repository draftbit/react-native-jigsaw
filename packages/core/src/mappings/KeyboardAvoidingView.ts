import {
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
  CONTAINER_COMPONENT_STYLES_SECTIONS,
} from "@draftbit/types";

export const SEED_DATA = {
  name: "Keyboard Avoiding View",
  tag: "KeyboardAvoidingView",
  description: "View that moves out of the way of the virtual keyboard. ",
  category: COMPONENT_TYPES.view,
  stylesPanelSections: CONTAINER_COMPONENT_STYLES_SECTIONS,
  props: {
    enabled: {
      label: "Enabled",
      description: "Enable the keyboard avoiding view",
      editable: true,
      required: true,
      defaultValue: true,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      group: GROUPS.basic,
    },
    behavior: {
      label: "Resizing Behavior",
      description:
        "The behavior for how the keyboard resizing interacts with the rest of the screen. (Default: padding).",
      editable: true,
      required: true,
      defaultValue: "padding",
      options: ["padding", "position", "height"],
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      group: GROUPS.basic,
    },
    keyboardVerticalOffset: {
      label: "Keyboard Vertical Offset",
      description:
        "The distance between the bottom of the view and the keyboard",
      editable: true,
      required: false,
      defaultValue: 0,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.basic,
    },
  },
};
