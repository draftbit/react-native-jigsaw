import * as React from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  PressableProps,
} from "react-native";
import color from "color";
import Config from "../components/Config";
import Text from "../components/Text";
import Elevation from "../components/Elevation";
import { withTheme } from "@draftbit/theme";

import type { ReadTheme } from "@draftbit/theme";
import type { IconSlot } from "../interfaces/Icon";

/**
 * A floating action button represents the primary action in an application.
 *
 * <div class="screenshots">
 *   <img src="screenshots/fab-1.png" />
 *   <img src="screenshots/fab-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { StyleSheet } from 'react-native';
 * import { FAB } from '@draftbit/ui';
 *
 * const MyComponent = () => (
 *   <FAB
 *     style={styles.fab}
 *     type="outline"
 *     icon="add"
 *     onPress={() => console.log('Pressed')}
 *   />
 * );
 *
 * const styles = StyleSheet.create({
 *   fab: {
 *     position: 'absolute',
 *     margin: 16,
 *     right: 0,
 *     bottom: 0,
 *   },
 * })
 *
 * export default MyComponent;
 * ```
 */

type Props = {
  disabled?: boolean;
  type?: "solid" | "extended" | "outline" | "fixed" | "standard";
  loading?: boolean;
  icon?: string;
  color?: string;
  label?: string;
  onPress: () => void;
  elevation?: number;
  theme: ReadTheme;
  style?: StyleProp<ViewStyle>;
} & PressableProps &
  IconSlot;

/**
 * @deprecated DEPRECATED
 */
const FAB: React.FC<React.PropsWithChildren<Props>> = ({
  Icon,
  icon,
  disabled = false,
  type = "solid",
  loading = false,
  color: colorOverride,
  label,
  onPress,
  elevation = 0,
  style,
  theme: { colors, typography },
  ...rest
}) => {
  let backgroundColor, borderColor, textColor, borderWidth;
  const buttonColor = colorOverride || colors.branding.primary;

  if (type === "standard" || type === "extended" || type === "fixed") {
    backgroundColor = buttonColor;

    if (disabled) {
      textColor = color(colors.background.brand).alpha(0.5).rgb().string();
    } else {
      textColor = colors.background.brand;
    }
  } else {
    backgroundColor = "transparent";

    if (disabled) {
      textColor = color(buttonColor).alpha(0.5).rgb().string();
    } else {
      textColor = buttonColor;
    }
  }

  if (type === "outline") {
    if (disabled) {
      borderColor = color(buttonColor).alpha(0.5).rgb().string();
    } else {
      borderColor = buttonColor;
    }
    borderWidth = StyleSheet.hairlineWidth;
  } else {
    borderColor = "transparent";
    borderWidth = 0;
  }

  const buttonStyle: StyleProp<ViewStyle> = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyles: StyleProp<ViewStyle>[] = [styles.button, buttonStyle];

  const contentStyle: StyleProp<ViewStyle>[] = [styles.content];

  const textStyle: StyleProp<TextStyle> = {
    textAlign: "center",
    color: textColor,
  };

  const iconStyle: StyleProp<ViewStyle>[] = [
    styles.icon,
    {
      width: Config.buttonIconSize,
    },
  ];

  if (type === "standard" || type === "outline") {
    buttonStyle.width = Config.FABSize;
    buttonStyle.height = Config.FABSize;
    buttonStyle.borderRadius = Config.FABBorderRadius;

    contentStyle.push({
      width: Config.FABSize,
      height: Config.FABSize,
    });
  }

  if (type === "extended" || type === "fixed") {
    iconStyle.push({
      marginLeft: 16,
      marginRight: -8,
    });

    textStyle.margin = 16;
  }

  if (type === "fixed") {
    buttonStyles.push({
      height: Config.FABFixedHeight,
      alignSelf: "stretch",
    });
  }

  return (
    <Elevation style={[{ elevation }, style]}>
      <Pressable
        {...rest}
        onPress={onPress}
        accessibilityState={{ disabled }}
        accessibilityRole="button"
        disabled={disabled || loading}
        style={buttonStyles}
      >
        <View style={styles.content}>
          {icon && loading !== true ? (
            <View style={iconStyle}>
              <Icon
                name={icon}
                size={Config.buttonIconSize}
                color={textColor}
              />
            </View>
          ) : null}
          {loading ? (
            <ActivityIndicator
              size="small"
              color={textColor}
              style={iconStyle}
            />
          ) : null}
          {label ? (
            <Text numberOfLines={1} style={[textStyle, typography.button]}>
              {label}
            </Text>
          ) : null}
        </View>
      </Pressable>
    </Elevation>
  );
};

const styles = StyleSheet.create({
  button: {
    borderStyle: "solid",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: Config.buttonIconSize,
  },
});

export default withTheme(FAB);
