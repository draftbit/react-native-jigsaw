import * as React from "react";
import { withTheme } from "../core/theming";

import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Config from "./Config";
import IconButton from "./IconButton";

function RadioButton({ selected, disabled, color, unselectedColor, onPress }) {
  return (
    <IconButton
      icon={
        selected
          ? "MaterialIcons/radio-button-checked"
          : "MaterialIcons/radio-button-unchecked"
      }
      color={selected ? color : unselectedColor}
      disabled={disabled}
      onPress={() => onPress()}
      size={Config.radioButtonSize}
    />
  );
}

RadioButton.defaultProps = {
  onPress: () => {},
  selectedColor: "#5a45ff",
};

export default withTheme(RadioButton);

export const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
    selected: {
      group: GROUPS.data,
      label: "Selected",
      description: "Whether the radio button is selected",
      required: true,
      editable: true,
      defaultValue: true,
      formType: FORM_TYPES.boolean,
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "Color for the button",
      required: false,
      editable: true,
      defaultValue: "primary",
      formType: FORM_TYPES.color,
    },
    unselectedColor: {
      group: GROUPS.basic,
      label: "Unselected Color",
      description: "Unselected Color for the button",
      required: false,
      editable: true,
      defaultValue: "secondary",
      formType: FORM_TYPES.color,
    },
    disabled: {
      group: GROUPS.data,
      label: "Disabled",
      description: "Whether radio button is disabled",
      editable: true,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.boolean,
    },
  },
  layout: {
    width: 24,
    height: 24,
  },
};
