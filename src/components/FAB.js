import * as React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import color from "color";
import Config from "./Config";
import Icon from "./Icon";
import Text from "./Text";
import Touchable from "./Touchable";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";

import { FORM_TYPES, COMPONENT_TYPES } from "../core/component-types";

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
class FAB extends React.Component {
  static defaultProps = {
    elevation: 0,
    type: "solid",
  };

  render() {
    const {
      disabled,
      type,
      loading,
      icon,
      color: colorOverride,
      label,
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
      typography,
    } = theme;

    let backgroundColor, borderColor, textColor, borderWidth;
    const buttonColor = colorOverride || colors.primary;

    if (type === "standard" || type === "extended" || type === "fixed") {
      backgroundColor = buttonColor;

      if (disabled) {
        textColor = color(colors.surface).alpha(disabledOpacity).rgb().string();
      } else {
        textColor = colors.surface;
      }
    } else {
      backgroundColor = "transparent";

      if (disabled) {
        textColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
      } else {
        textColor = buttonColor;
      }
    }

    if (type === "outline") {
      if (disabled) {
        borderColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
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
      borderRadius: borderRadius.button,
      alignItems: "center",
      justifyContent: "center",
    };

    const buttonStyles = [styles.button, buttonStyle];

    const contentStyle = [styles.content];

    const textStyle = {
      textAlign: "center",
      color: textColor,
    };

    const iconStyle = [
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
        marginLeft: spacing.large,
        marginRight: -8,
      });

      textStyle.margin = spacing.large;
    }

    if (type === "fixed") {
      buttonStyles.push({
        height: Config.FABFixedHeight,
        alignSelf: "stretch",
      });
      buttonStyles.push(styles.fixed);
    }

    return (
      <Elevation style={[{ elevation }, style]}>
        <Touchable
          {...rest}
          onPress={onPress}
          accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
          accessibilityComponentType="button"
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
              <Text
                numberOfLines={1}
                style={[styles.label, textStyle, typography.button]}
              >
                {label}
              </Text>
            ) : null}
          </View>
        </Touchable>
      </Elevation>
    );
  }
}

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
  fixed: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    borderRadius: 0,
  },
});

export default withTheme(FAB);

const SEED_DATA_PROPS = {
  icon: {
    label: "Icon Name",
    description: "Name of the icon",
    editable: true,
    required: true,
    type: FORM_TYPES.icon,
    value: null,
  },
  label: {
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    type: FORM_TYPES.string,
    value: "GET STARTED",
  },
  color: {
    label: "Color Override",
    description: "Override the background color of the button",
    editable: true,
    required: false,
    type: FORM_TYPES.color,
    value: null,
  },
  onPress: {
    label: "Action",
    description: "Action to execute when button pressed",
    editable: true,
    type: FORM_TYPES.action,
    value: null,
  },
};

export const SEED_DATA = [
  {
    name: "FAB Mini",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    description: "A round, mini FAB",
    preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.icon,
        value: "standard",
      },
      label: {
        label: "Label",
        description: "Button label",
        required: false,
        editable: false,
        type: FORM_TYPES.string,
        value: null,
      },
    },
    layout: {},
  },
  {
    name: "FAB Outline",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.string,
        value: "outline",
      },
      label: {
        label: "Label",
        description: "Button label",
        required: false,
        editable: false,
        type: FORM_TYPES.string,
        value: null,
      },
    },
    layout: {},
  },
  {
    name: "FAB Extended",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    preview_image_url: "{CLOUDINARY_URL}/Button_FABExtended.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.string,
        value: "extended",
      },
    },
    layout: {},
  },
  {
    name: "FAB Fixed",
    tag: "FAB",
    category: COMPONENT_TYPES.button,
    preview_image_url: "{CLOUDINARY_URL}/Button_FABFixed.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        type: FORM_TYPES.string,
        value: "fixed",
      },
    },
    layout: {},
  },
];
