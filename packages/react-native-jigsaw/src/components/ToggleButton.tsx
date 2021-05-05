import * as React from "react";
import { withTheme } from "../core/theming";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "../types";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import IconButton from "./IconButton";
import {
  COMPONENT_TYPES,
  GROUPS,
  createIconProp,
  FORM_TYPES,
  PROP_TYPES,
  createBoolProp,
  createTextProp,
  createColorProp,
  createNumberProp,
  createActionProp,
  FIELD_NAME,
} from "../core/component-types";

type Props = {
  icon: string;
  status?: "checked" | "unchecked";
  onPress?: () => void;
  disabled?: boolean;
  color?: colorTypes;
  colorSecondary?: colorTypes;
  borderColor?: colorTypes;
  iconSize?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
  theme: typeof themeT;
};

const ToggleButton: React.FC<Props> = ({
  icon,
  status = "unchecked",
  onPress = () => {},
  disabled = false,
  color = "primary",
  colorSecondary = "surface",
  borderColor = "divider",
  iconSize = 25,
  width = 50,
  height = 50,
  style,
  accessibilityLabel = "toggle button",
  theme: { colors },
}) => {
  return (
    <IconButton
      icon={icon}
      size={iconSize}
      color={status === "unchecked" ? colors[colorSecondary] : colors[color]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      accessibilityRole="button"
      style={[
        styles.mainContainer,
        {
          width,
          height,
          backgroundColor:
            status === "unchecked" ? colors[color] : colors[colorSecondary],
          borderColor: colors[borderColor],
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
  },
});

export default withTheme(ToggleButton);

export const SEED_DATA = {
  name: "Toggle Button",
  tag: "ToggleButton",
  category: COMPONENT_TYPES.button,
  layout: {},
  props: {
    icon: createIconProp({
      required: true,
    }),
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "unchecked",
      valuePropName: "status",
      handlerPropName: "onPress",
    },
    onPress: createActionProp(),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether the button should be disabled",
    }),
    color: createColorProp(),
    colorSecondary: createColorProp({
      label: "Secondary Color",
    }),
    borderColor: createColorProp({
      label: "Border Color",
    }),
    iconSize: {
      group: GROUPS.basic,
      label: "Icon Size",
      description: "Size of icon",
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 32,
      options: [12, 16, 24, 32, 48, 64],
    },
    width: createNumberProp({
      label: "Width",
      description: "Width",
      defaultValue: 50,
    }),
    height: createNumberProp({
      label: "Height",
      description: "Height",
      defaultValue: 50,
    }),
    accessibilityLabel: createTextProp({
      label: "Accessibility Label",
      description:
        "Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.",
    }),
  },
};
