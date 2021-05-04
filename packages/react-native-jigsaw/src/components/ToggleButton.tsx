import * as React from "react";
import { withTheme } from "../core/theming";
import themeT from "../styles/DefaultTheme";
import { colorTypes } from "../types";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Touchable from "./Touchable";
import Icon from "./Icon";

type Props = {
  icon: string | number | { uri: string };
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
    <Touchable
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
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled }}
      accessibilityRole="button"
    >
      <Icon
        name={icon}
        size={iconSize}
        color={status === "unchecked" ? colors[colorSecondary] : colors[color]}
      />
    </Touchable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withTheme(ToggleButton);
