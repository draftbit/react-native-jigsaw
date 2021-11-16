import * as React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  Pressable,
  PressableProps,
  Platform,
} from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  icon?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
} & PressableProps &
  IconSlot;

const IconButton: React.FC<Props> = ({
  Icon,
  icon,
  color: customColor,
  size = 32,
  disabled = false,
  loading = false,
  onPress,
  theme,
  style,
  ...props
}) => {
  const iconColor = customColor || theme.colors.primary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => {
        return [
          styles.container,
          {
            opacity: pressed || disabled ? 0.75 : 1,
            width: size,
            height: size,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ];
      }}
      {...props}
    >
      <View>
        {icon && !loading ? (
          <Icon name={icon} size={size - 2} color={iconColor} />
        ) : null}
        {loading ? <ActivityIndicator size="small" color={iconColor} /> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
});

export default withTheme(IconButton);
