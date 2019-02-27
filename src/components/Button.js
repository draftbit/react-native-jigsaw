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
import Config from "./Config";
import Icon from "./Icon";
import Touchable from "./Touchable";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import type { Theme } from "../types";
import type { IconSource } from "./Icon";
import { FORM_TYPES, COMPONENT_TYPES } from "../core/component-types";

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
    type: "solid"
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
      elevation,
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

    if (type === "solid") {
      backgroundColor = buttonColor;

      if (disabled) {
        textColor = color(colors.surface)
          .alpha(disabledOpacity)
          .rgb()
          .string();
      } else {
        textColor = colors.surface;
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
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius: borderRadius.button
    };

    const textStyle = {
      textAlign: "center",
      color: textColor,
      marginVertical: spacing.large,
      marginHorizontal: spacing.large
    };

    const iconStyle = [
      styles.icon,
      {
        marginLeft: spacing.large,
        marginRight: -8,
        width: Config.buttonIconSize
      }
    ];

    return (
      <Elevation style={{ elevation, alignSelf: "stretch" }}>
        <Touchable
          {...rest}
          onPress={onPress}
          accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
          accessibilityComponentType="button"
          disabled={disabled || loading}
          style={[styles.button, buttonStyle, style]}
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
            <Text
              numberOfLines={1}
              style={[styles.label, textStyle, typography.button]}
            >
              {children}
            </Text>
          </View>
        </Touchable>
      </Elevation>
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
    width: Config.buttonIconSize
  }
});

export default withTheme(Button);

const SEED_DATA_PROPS = {
  icon: {
    label: "Icon Name",
    description: "Name of the icon",
    editable: true,
    required: true,
    type: FORM_TYPES.icon,
    value: "MaterialIcons/add"
  },
  children: {
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    type: FORM_TYPES.string,
    value: "Get Started"
  },
  color: {
    label: "Color Override",
    description: "Override the background color of the button",
    editable: true,
    required: false,
    type: FORM_TYPES.color,
    value: null
  },
  disabled: {
    label: "Disabled",
    description: "Whether the button should be disabled",
    editable: true,
    required: false,
    type: FORM_TYPES.boolean,
    value: null
  },
  loading: {
    label: "Loading",
    description: "Whether to show a loading indicator",
    editable: true,
    required: false,
    type: FORM_TYPES.boolean,
    value: null
  }
};

export const SEED_DATA = [
  {
    name: "Button Outline",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    preview_image_url:
      "{CLOUDINARY_URL}/Button_Outline.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.string,
        value: "outline"
      }
    },
    layout: {
      width: 343,
      height: 48
    }
  },
  {
    name: "Button Solid",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    preview_image_url:
      "{CLOUDINARY_URL}/Button_Solid.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.string,
        value: "solid"
      }
    },
    layout: {
      width: 343,
      height: 48
    }
  },
  {
    name: "Button Text",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    preview_image_url:
      "{CLOUDINARY_URL}/Button_Text.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.string,
        value: "text"
      }
    },
    layout: {
      width: 343,
      height: 48
    }
  }
];
