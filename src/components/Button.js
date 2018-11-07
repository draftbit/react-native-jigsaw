/* @flow */

import * as React from "react";
import {
  ActivityIndicator,
  Animated,
  View,
  Text,
  StyleSheet
} from "react-native";
import color from "color";
import Icon from "./Icon";
import Touchable from "./Touchable";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import type { IconSource } from "./Icon";

type Props = {
  /**
   * Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color (high emphasis)
   */
  mode?: "text" | "outlined" | "contained",
  /**
   * Whether the color is a dark color. A dark button will render light text and vice-versa. Only applicable for `contained` mode.
   */
  dark?: boolean,
  /**
   * Use a compact look, useful for `text` buttons in a row.
   */
  compact?: boolean,
  /**
   * Custom text color for flat button, or background color for contained button.
   */
  color?: string,
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean,
  /**
   * Icon to display for the `Button`.
   */
  icon?: IconSource,
  /**
   * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean,
  /**
   * Label text of the button.
   */
  children: React.Node,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  style?: any,
  /**
   * @optional
   */
  theme: Theme
};

class Button extends React.Component<Props> {
  static defaultProps = {
    mode: "contained",
    children: "Button Text"
  };

  render() {
    const {
      disabled,
      compact,
      mode,
      dark,
      loading,
      icon,
      color: colorOverride,
      children,
      onPress,
      style,
      theme,
      ...rest
    } = this.props;
    const {
      colors,
      disabledOpacity,
      borderRadius,
      spacing,
      typography
    } = theme;

    let backgroundColor, borderColor, textColor, borderWidth;
    const buttonColor = colorOverride || colors.primary;

    if (mode === "contained") {
      backgroundColor = buttonColor;

      if (disabled) {
        textColor = color(colors.surface)
          .alpha(disabledOpacity)
          .rgb()
          .string();
      } else {
        let isDark;

        if (typeof dark === "boolean") {
          isDark = dark;
        } else {
          isDark = !color(buttonColor).light();
        }

        textColor = isDark ? colors.surface : colors.strong;
      }
    } else {
      backgroundColor = "transparent";

      if (disabled) {
        textColor = color(buttonColor)
          .alpha(disabledOpacity)
          .rgb()
          .string();
      } else {
        textColor = buttonColor;
      }
    }

    if (mode === "outlined") {
      if (disabled) {
        borderColor = color(buttonColor)
          .alpha(disabledOpacity)
          .rgb()
          .string();
      } else {
        borderColor = buttonColor;
      }
      borderWidth = StyleSheet.hairlineWidth;
    } else {
      borderColor = "transparent";
      borderWidth = 0;
    }

    const buttonStyle = {
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius: borderRadius.button
    };
    const textStyle = { color: textColor, marginVertical: spacing.large };

    return (
      <Touchable
        {...rest}
        onPress={onPress}
        accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
        accessibilityComponentType="button"
        disabled={disabled}
        style={[styles.button, compact && styles.compact, buttonStyle, style]}
      >
        <View style={styles.content}>
          {icon && loading !== true ? (
            <View style={styles.icon}>
              <Icon name={icon} size={24} color={textColor} />
            </View>
          ) : null}
          {loading ? (
            <ActivityIndicator
              size="small"
              color={textColor}
              style={styles.icon}
            />
          ) : null}
          <Text
            numberOfLines={1}
            style={[
              styles.label,
              compact && styles.compactLabel,
              textStyle,
              typography.button
            ]}
          >
            {children}
          </Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: "solid"
  },
  compact: {
    minWidth: "auto"
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 24,
    marginLeft: 12,
    marginRight: -8
  },
  label: {
    textAlign: "center",
    letterSpacing: 1,
    marginHorizontal: 16
  },
  compactLabel: {
    marginHorizontal: 8
  }
});

export default withTheme(Button);
