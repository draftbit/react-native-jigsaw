import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  PressableProps,
  Platform,
} from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  size?: number;
  bgColor?: string;
  iconColor?: string;
  iconName?: string;
  onPress: () => void;
  theme: ReadTheme;
  style?: StyleProp<ViewStyle>;
} & PressableProps &
  IconSlot;

/**
 * @deprecated DEPRECATED
 */
const FAB: React.FC<React.PropsWithChildren<Props>> = ({
  onPress,
  disabled,
  loading,
  iconName = "MaterialIcons/add",
  style,
  theme,
  iconColor,
  bgColor,
  size = 50,
  Icon,
  ...props
}) => {
  const backgroundColor = bgColor || theme.colors.branding.primary;
  const color = iconColor || "#FFF";

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <Pressable
        onPress={onPress}
        disabled={loading || disabled}
        android_ripple={{
          color: "#333",
          radius: size / 4,
        }}
        style={({ pressed }) => {
          return [
            styles.button,
            {
              opacity: pressed || disabled ? 0.75 : 1,
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor,
            },
          ];
        }}
        {...props}
      >
        <View>
          {loading ? (
            <ActivityIndicator
              style={size > 50 ? { marginTop: 2, marginLeft: 2 } : undefined}
              size={size <= 50 ? "small" : "large"}
              color={color}
            />
          ) : (
            <Icon name={iconName} size={size} color={color} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5a45ff",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
});

export default withTheme(FAB);
