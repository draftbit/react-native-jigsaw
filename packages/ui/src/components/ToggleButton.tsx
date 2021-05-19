import * as React from "react";
import { withTheme } from "../core/theming";
import type { Theme } from "../styles/DefaultTheme";
import { colorTypes } from "../types";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import IconButton from "./IconButton";
import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createActionProp,
  createFieldNameProp,
  createIconSizeProp,
} from "@draftbit/types";

type Props = {
  icon: string;
  toggled?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  color?: colorTypes;
  colorSecondary?: colorTypes;
  borderColor?: colorTypes;
  iconSize?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
};

const ToggleButton: React.FC<Props> = ({
  icon,
  toggled = false,
  onPress = () => {},
  disabled = false,
  color = "primary",
  colorSecondary = "surface",
  borderColor = "divider",
  iconSize = 25,
  width = 50,
  height = 50,
  theme: { colors },
  style,
  ...rest
}) => {
  return (
    <IconButton
      icon={icon}
      size={iconSize}
      color={toggled ? colors[color] : colors[colorSecondary]}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.mainContainer,
        {
          width,
          height,
          backgroundColor: toggled ? colors[colorSecondary] : colors[color],
          borderColor: colors[borderColor],
        },
        style,
      ]}
      {...rest}
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
    iconSize: createIconSizeProp(),
    fieldName: createFieldNameProp({
      defaultValue: false,
      valuePropName: "toggled",
    }),
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
  },
};
