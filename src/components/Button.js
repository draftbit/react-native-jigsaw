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
   * Type of the button. You can change the type to adjust the styling to give it desired emphasis.
   * - `text` - flat button without background or outline (low emphasis)
   * - `outline` - button with an outline (medium emphasis)
   * - `solid` - button with a background color (high emphasis)
   */
  type?: "text" | "outline" | "solid",
  /**
   * Custom text color for flat button, or background color for solid button.
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

/**
 * A button is component that the user can press to trigger an action.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/button-1.png" />
 *     <figcaption>Text button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-2.png" />
 *     <figcaption>Outlined button</figcaption>
 *   </figure>
 *   <figure>
 *     <img src="screenshots/button-3.png" />
 *     <figcaption>Contained button</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button } from '@draftbit/ui';
 *
 * const MyComponent = () => (
 *   <Button icon="add-a-photo" type="solid" onPress={() => console.log('Pressed')}>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */

class Button extends React.Component<Props> {
  static defaultProps = {
    elevation: 0,
    type: "solid",
    children: "Button Text"
  };

  render() {
    const {
      disabled,
      type,
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
      typography,
      elevation
    } = theme;

    let backgroundColor, borderColor, textColor, borderWidth;
    const buttonColor = colorOverride || colors.primary;

    if (type === "solid") {
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

    if (type === "outline") {
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
      ...elevation[this.props.elevation],
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius: borderRadius.button,
    };

    const textStyle = {
      textAlign: "center",
      color: textColor,
      marginVertical: spacing.large,
      marginHorizontal: spacing.large,
    };

    const iconStyle = [
      styles.icon,
      {
        marginLeft: spacing.large,
        marginRight: -8,
        width: 24
      }
    ]

    return (
      <Touchable
        {...rest}
        onPress={onPress}
        accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
        accessibilityComponentType="button"
        disabled={disabled}
        style={[styles.button, buttonStyle, style]}
      >
        <View style={styles.content}>
          {icon && loading !== true ? (
            <View style={iconStyle}>
              <Icon name={icon} size={24} color={textColor} />
            </View>
          ) : null}
          {loading ? (
            <ActivityIndicator
              size="small"
              color={textColor}
              style={iconStyle}
            />
          ) : null}
          <Text
            numberOfLines={1}
            style={[
              styles.label,
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
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 24,
  }
});

export default withTheme(Button);
