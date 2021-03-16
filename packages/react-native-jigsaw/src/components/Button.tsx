import * as React from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableHighlightProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import color from "color";
import Config from "./Config";
import Icon from "./Icon";
import Touchable from "./Touchable";
import { withTheme } from "../core/theming";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";
import theme from "../styles/DefaultTheme";

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

type Props = {
  disabled?: boolean;
  type?: "solid" | "outline" | "text";
  loading?: boolean;
  icon?: string;
  labelColor?: string;
  color?: string;
  children?: React.ReactNode;
  onPress: () => void;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
} & TouchableHighlightProps;

const Button: React.FC<Props> = ({
  disabled = false,
  type = "solid",
  loading = false,
  icon,
  labelColor,
  color: colorOverride,
  children,
  onPress,
  style,
  theme: { colors, disabledOpacity, borderRadius, typography },
  ...rest
}) => {
  let backgroundColor, borderColor, textColor, borderWidth;
  const buttonColor = colorOverride || colors.primary;

  if (type === "solid") {
    backgroundColor = buttonColor;

    if (disabled) {
      textColor = color(colors.surface).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = labelColor || colors.surface;
    }
  } else {
    backgroundColor = "transparent";

    if (disabled) {
      textColor = color(buttonColor).alpha(disabledOpacity).rgb().string();
    } else {
      textColor = labelColor || buttonColor;
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
    borderRadius,
  };

  const textStyle: StyleProp<TextStyle> = {
    textAlign: "center",
    color: textColor,
  };

  const iconStyle = [
    styles.icon,
    {
      marginRight: 4,
      width: Config.buttonIconSize,
    },
  ];

  return (
    <Touchable
      {...rest}
      onPress={onPress}
      accessibilityState={{ disabled }}
      accessibilityRole="button"
      disabled={disabled || loading}
      style={[styles.button, buttonStyle, style]}
    >
      <View style={styles.content}>
        {icon && loading !== true ? (
          <View style={iconStyle}>
            <Icon name={icon} size={Config.buttonIconSize} color={textColor} />
          </View>
        ) : null}
        {loading ? (
          <ActivityIndicator size="small" color={textColor} style={iconStyle} />
        ) : null}
        <Text numberOfLines={1} style={[textStyle, typography.button]}>
          {children}
        </Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: "solid",
    height: 40,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: Config.buttonIconSize,
  },
});

export default withTheme(Button);

const SEED_DATA_PROPS = {
  icon: {
    group: GROUPS.basic,
    label: "Icon Name",
    description: "Name of the icon",
    editable: true,
    required: true,
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
  },
  children: {
    group: GROUPS.data,
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Get Started",
  },
  color: {
    group: GROUPS.basic,
    label: "Color Override",
    description: "Override the background color of the button",
    editable: true,
    required: false,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.THEME,
    defaultValue: null,
  },
  labelColor: {
    group: GROUPS.basic,
    label: "Label Color Override",
    description: "Override the label color of the button",
    editable: true,
    required: false,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.THEME,
    defaultValue: null,
  },
  disabled: {
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the button should be disabled",
    editable: true,
    required: false,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
  },
  loading: {
    group: GROUPS.data,
    label: "Loading",
    description: "Whether to show a loading indicator",
    editable: true,
    required: false,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
  },
  onPress: {
    group: GROUPS.basic,
    label: "Action",
    description: "Action to execute when button pressed",
    editable: true,
    required: false,
    formType: FORM_TYPES.action,
    defaultValue: null,
  },
};

export const SEED_DATA = [
  {
    name: "Button Outline",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    preview_image_url: "{CLOUDINARY_URL}/Button_Outline.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        group: GROUPS.uncategorized,
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "outline",
      },
    },
    layout: {},
  },
  {
    name: "Button Solid",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    preview_image_url: "{CLOUDINARY_URL}/Button_Solid.png",
    props: {
      ...SEED_DATA_PROPS,
      type: {
        group: GROUPS.uncategorized,
        label: "Type",
        description: "Button type",
        editable: false,
        required: true,
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "solid",
      },
    },
    layout: {},
  },
];
