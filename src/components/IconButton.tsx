import * as React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import Touchable from "./Touchable";
import Icon from "./Icon";
import { withTheme } from "../core/theming";
import {
  FORM_TYPES,
  COMPONENT_TYPES,
  GROUPS,
  PROP_TYPES,
} from "../core/component-types";
import themeT from "../styles/DefaultTheme";

type Props = {
  icon?: string;
  color?: string;
  size?: number;
  accessibilityLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
  theme: typeof themeT;
  style?: StyleProp<ViewStyle>;
};

const IconButton: React.FC<Props> = ({
  icon,
  color: customColor,
  size = 32,
  accessibilityLabel,
  disabled = false,
  loading = false,
  onPress,
  theme,
  style,
  ...rest
}) => {
  const iconColor = customColor || theme.colors.primary;
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container];

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
      accessibilityState={{ disabled }}
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
      group: GROUPS.basic,
      label: "Icon Name",
      description: "Name of icon",
      editable: true,
      required: false,
      formType: FORM_TYPES.icon,
      propType: PROP_TYPES.ASSET,
      defaultValue: null,
    },
    size: {
      group: GROUPS.basic,
      label: "Icon Size",
      description: "Size of icon",
      editable: true,
      required: false,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 32,
      options: [16, 24, 32],
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "Color of the icon",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      defaultValue: "strong",
      editable: true,
      required: true,
    },
    onPress: {
      group: GROUPS.basic,
      label: "Action",
      description: "Action to execute when icon button pressed",
      editable: true,
      formType: FORM_TYPES.action,
      propType: PROP_TYPES.STRING,
      defaultValue: null,
    },
  },
  layout: {
    width: 32,
    height: 32,
  },
};
