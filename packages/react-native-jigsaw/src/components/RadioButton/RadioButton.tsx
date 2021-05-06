import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
} from "../../core/component-types";
import Config from "../Config";
import IconButton from "../IconButton";
import themeT from "../../styles/DefaultTheme";

export type RadioButtonProps = {
  selected: boolean;
  disabled?: boolean;
  color?: string;
  unselectedColor?: string;
  onPress?: () => void;
  theme: typeof themeT;
  style?: StyleProp<ViewStyle>;
  size?: number;
  selectedIcon?: string;
  unselectedIcon?: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  selected,
  disabled = false,
  color,
  unselectedColor,
  onPress = () => {},
  style,
  size = Config.radioButtonSize,
  selectedIcon = "MaterialIcons/radio-button-checked",
  unselectedIcon = "MaterialIcons/radio-button-unchecked",
}) => {
  return (
    <IconButton
      style={style}
      icon={selected ? selectedIcon : unselectedIcon}
      color={selected ? color : unselectedColor}
      disabled={disabled}
      onPress={onPress}
      size={size}
    />
  );
};

export default RadioButton;

export const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: COMPONENT_TYPES.deprecated,
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
