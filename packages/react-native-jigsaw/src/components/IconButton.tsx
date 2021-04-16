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
  FORM_TYPES,
  COMPONENT_TYPES,
  GROUPS,
  PROP_TYPES,
  createIconProp,
  createActionProp,
  createColorProp,
} from "../core/component-types";
import Theme from "../styles/DefaultTheme";

type Props = {
  icon?: string;
  color?: string;
  size?: number;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  theme: typeof Theme;
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
          },
          style,
        ];
      }}
      {...props}
    >
      <View>
        {icon && !loading ? (
          <SelectedIcon name={icon} size={size} color={iconColor} />
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
    onPress: createActionProp(),
    size: {
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
    color: createColorProp(),
  },
};
