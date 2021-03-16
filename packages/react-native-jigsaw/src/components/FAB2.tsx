import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  PressableProps,
} from "react-native";
import { withTheme } from "../core/theming";
import Icon from "./Icon";
import theme from "../styles/DefaultTheme";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  size?: number;
  bgColor?: string;
  iconColor?: string;
  iconName?: string;
  onPress: () => void;
  theme: typeof theme;
  IconOverride: typeof Icon;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

const FAB: React.FC<Props> = ({
  onPress,
  disabled,
  loading,
  bgColor = "#5a45ff",
  iconColor = "#000",
  iconName = "add",
  style,
  theme,
  size = 50,
  IconOverride = null,
  ...props
}) => {
  const SelectedIcon = IconOverride || Icon;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: "hidden",
      }}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={{
          color: "#333",
          radius: size / 4,
        }}
        style={({ pressed }) => {
          return [
            styles.button,
            {
              opacity: pressed ? 0.75 : 1,
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: bgColor,
            },
            style,
          ];
        }}
        {...props}
      >
        <View style={styles.icon}>
          {!loading ? (
            <ActivityIndicator size="small" color={iconColor} />
          ) : (
            <SelectedIcon name={iconName} size={28} color={iconColor} />
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // @ts-ignore
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    // @ts-ignore
    userSelect: "none",
  },
});

export default withTheme(FAB);

export const SEED_DATA = [
  {
    name: "FAB Mini",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    description: "A round, mini FAB",
    preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
    props: {
      icon: {
        group: GROUPS.basic,
        label: "Icon Name",
        description: "Name of the icon",
        editable: true,
        required: true,
        formType: FORM_TYPES.icon,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
      },
      bgColor: {
        group: GROUPS.basic,
        label: "Color Override",
        description: "Override the background color of the button",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
      },
      iconColor: {
        group: GROUPS.basic,
        label: "Color Override",
        description: "Override the background color of the button",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: null,
      },
      onPress: {
        group: GROUPS.basic,
        label: "Action",
        description: "Action to execute when button pressed",
        editable: true,
        required: false,
        formType: FORM_TYPES.action,
        propType: PROP_TYPES.STRING,
        defaultValue: null,
      },
    },
    layout: {},
  },
];
