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
import Icon from "./Icon";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  GROUPS,
  createIconProp,
  createActionProp,
  createColorProp,
  createNumberProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";

type Props = {
  icon?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  IconOverride?: typeof Icon;
} & PressableProps;

const IconButton: React.FC<Props> = ({
  icon,
  color: customColor,
  size = 32,
  disabled = false,
  loading = false,
  IconOverride = null,
  onPress,
  theme,
  style,
  ...props
}) => {
  const iconColor = customColor || theme.colors.primary;

  // Necessary to inject web-renderable Icons in buider.
  const SelectedIcon = IconOverride || Icon;

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
          <SelectedIcon name={icon} size={size - 2} color={iconColor} />
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

export const SEED_DATA = {
  name: "Icon Button",
  tag: "IconButton",
  category: COMPONENT_TYPES.button,
  layout: {},
  props: {
    icon: createIconProp(),
    color: createColorProp(),
    onPress: createActionProp(),
    size: createNumberProp({
      group: GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 32,
      min: 16,
      max: 128,
      step: 1,
      precision: 0,
    }),
  },
};
