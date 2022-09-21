import * as React from "react";
import { withTheme } from "../theming";
import { colorTypes } from "@draftbit/types";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import IconButton from "./IconButton";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  icon: string;
  toggled?: boolean;
  onPress?: (value: boolean) => void;
  defaultValue?: boolean;
  disabled?: boolean;
  color?: colorTypes;
  colorSecondary?: colorTypes;
  borderColor?: colorTypes;
  iconSize?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const ToggleButton: React.FC<React.PropsWithChildren<Props>> = ({
  Icon,
  icon,
  toggled = false,
  onPress = () => {},
  defaultValue,
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
  const [internalValue, setInternalValue] = React.useState<boolean>(
    toggled || defaultValue || false
  );

  React.useEffect(() => {
    if (toggled != null) {
      setInternalValue(toggled);
    }
  }, [toggled]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const handlePress = () => {
    setInternalValue(!internalValue);
    onPress(!internalValue);
  };

  return (
    <IconButton
      Icon={Icon}
      icon={icon}
      size={iconSize}
      color={internalValue ? colors[color] : colors[colorSecondary]}
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.mainContainer,
        {
          width,
          height,
          backgroundColor: internalValue
            ? colors[colorSecondary]
            : colors[color],
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
