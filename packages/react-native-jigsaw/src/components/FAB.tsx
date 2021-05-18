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
import { withTheme } from "../core/theming";
import Icon from "./Icon";
import type { Theme } from "../styles/DefaultTheme";

import {
  COMPONENT_TYPES,
  createIconProp,
  createActionProp,
} from "../core/component-types";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  size?: number;
  bgColor?: string;
  iconColor?: string;
  iconName?: string;
  onPress: () => void;
  theme: Theme;
  IconOverride: typeof Icon;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const FAB: React.FC<Props> = ({
  onPress,
  disabled,
  loading,
  iconName = "MaterialIcons/add",
  style,
  theme,
  size = 50,
  IconOverride = null,
  ...props
}) => {
  const { backgroundColor: bgColor, color: fgColor } = StyleSheet.flatten(
    style || {}
  ) as ViewStyle;

  const SelectedIcon = IconOverride || Icon;

  const backgroundColor = bgColor || theme.colors.primary;
  const color = fgColor || "#FFF";

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
            <ActivityIndicator size="small" color={color} />
          ) : (
            <SelectedIcon name={iconName} size={28} color={color} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5a45ff",
    color: "#FFF",
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

export const SEED_DATA = [
  {
    name: "FAB",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    description: "A round, mini FAB",
    layout: {
      backgroundColor: "primary",
      color: "#FFF",
    },
    props: {
      onPress: createActionProp(),
      icon: createIconProp({
        defaultValue: "MaterialIcons/add",
      }),
    },
  },
];
