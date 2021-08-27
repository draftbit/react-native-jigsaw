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
import Touchable from "./Touchable";
import Elevation from "./Elevation";
import { withTheme } from "../theming";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  createActionProp,
  Triggers,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

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
  theme: Theme;
} & TouchableHighlightProps &
  IconSlot;

const Button: React.FC<Props> = ({
  Icon,
  icon,
  disabled = false,
  type = "solid",
  loading = false,
  labelColor,
  color: colorOverride,
  children,
  onPress,
  elevation = 0,
  style,
  theme: { colors, disabledOpacity, roundness, typography },
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
    borderRadius: roundness,
  };

  const textStyle: StyleProp<TextStyle> = {
    textAlign: "center",
    color: textColor,
    marginVertical: 16,
    marginHorizontal: 16,
  };

  const iconStyle = [
    styles.icon,
    {
      marginLeft: 16,
      marginRight: -8,
      width: Config.buttonIconSize,
    },
  ];

  const {
    margin,
    marginEnd,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginHorizontal,
    marginVertical,
    ...innerStyles
  } = StyleSheet.flatten(style || {});

  const margins = {
    margin,
    marginEnd,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginHorizontal,
    marginVertical,
  };

  return (
    <Elevation style={{ elevation, alignSelf: "stretch", ...margins }}>
      <Touchable
        {...rest}
        onPress={onPress}
        accessibilityState={{ disabled }}
        accessibilityRole="button"
        disabled={disabled || loading}
        style={[styles.button, buttonStyle, innerStyles]}
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
          <Text numberOfLines={1} style={[textStyle, typography.button]}>
            {children}
          </Text>
        </View>
      </Touchable>
    </Elevation>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: "solid",
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
  onPress: createActionProp(),
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
};

export const SEED_DATA = [
  {
    name: "Button Outline",
    tag: "Button",
    category: COMPONENT_TYPES.deprecated,
    triggers: [Triggers.OnPress],
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
    category: COMPONENT_TYPES.deprecated,
    triggers: [Triggers.OnPress],
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
