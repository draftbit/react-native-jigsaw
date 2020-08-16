import * as React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Touchable from "./Touchable";
import Icon from "./Icon";
import { withTheme } from "../core/theming";
import { FORM_TYPES, COMPONENT_TYPES } from "../core/component-types";

const IconButton = ({
  icon,
  color: customColor,
  size = 32,
  accessibilityLabel,
  disabled,
  loading,
  onPress,
  theme,
  style,
  ...rest
}) => {
  const iconColor = customColor || theme.colors.text;
  const containerStyles = [styles.container];

  if (loading || disabled) {
    containerStyles.push({ opacity: theme.disabledOpacity });
  }

  if (style) {
    containerStyles.push(style);
  }

  return (
    <Touchable
      onPress={onPress}
      disabled={disabled || loading}
      style={containerStyles}
      accessibilityLabel={accessibilityLabel}
      accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityStates={disabled ? ["disabled"] : undefined}
      hitSlop={{ top: 6, left: 6, bottom: 6, right: 6 }}
      {...rest}
    >
      <View>
        {icon && !loading ? (
          <Icon name={icon} size={size} color={iconColor} />
        ) : null}
        {loading ? <ActivityIndicator size="small" color={iconColor} /> : null}
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withTheme(IconButton);

export const SEED_DATA = {
  name: "Icon Button",
  tag: "IconButton",
  category: COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Button_Icon.png",
  props: {
    icon: {
      label: "Icon Name",
      description: "Name of icon",
      editable: true,
      required: false,
      formType: FORM_TYPES.icon,
      value: null,
    },
    size: {
      label: "Icon Size",
      description: "Size of icon",
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      value: 32,
      options: [16, 24, 32],
    },
    color: {
      label: "Color",
      description: "Color of the icon",
      formType: FORM_TYPES.color,
      value: "strong",
      editable: true,
      required: true,
    },
    onPress: {
      label: "Action",
      description: "Action to execute when icon button pressed",
      editable: true,
      formType: FORM_TYPES.action,
      value: null,
    },
  },
  layout: {
    width: 32,
    height: 32,
  },
};
