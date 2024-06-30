import * as React from "react";
import { withTheme } from "@draftbit/theme";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import IconButton from "../components/IconButton";
import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  icon: string;
  toggled?: boolean;
  onPress?: (value: boolean) => void;
  defaultValue?: boolean;
  disabled?: boolean;
  color?: string;
  colorSecondary?: string;
  borderColor?: string;
  iconSize?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
} & IconSlot;

/**
 * @deprecated DEPRECATED
 */
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
      color={
        internalValue ? colors.branding[color] : colors.branding[colorSecondary]
      }
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.mainContainer,
        {
          width,
          height,
          backgroundColor: internalValue
            ? colors.branding[colorSecondary]
            : colors.branding[color],
          borderColor: colors.border[borderColor],
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
