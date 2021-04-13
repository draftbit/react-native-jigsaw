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
  Pressable,
} from "react-native";
import color from "color";
import Config from "./Config";
import Icon from "./Icon";
import { withTheme } from "../core/theming";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
  createBoolProp,
  createActionProp,
  createIconProp,
  createChildProp,
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
  loading = false,
  type = "solid",
  icon,
  labelColor,
  color: colorOverride,
  children,
  onPress,
  style,
  theme: { colors, disabledOpacity, roundness, typography },
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
    <Pressable
      disabled={!onPress}
      onPress={onPress}
      style={({ pressed }) => {
        return [
          {
            opacity: pressed ? 0.8 : 1,
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius: roundness,
          },
          styles.button,
        ];
      }}
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
    </Pressable>
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
  icon: createIconProp(),
  children: createChildProp({
    defaultValue: "Get Started",
  }),
  disabled: createBoolProp({
    label: "Disabled",
    description: "Whether the button should be disabled",
    group: GROUPS.data,
  }),
  loading: createBoolProp({
    label: "Loading",
    description: "Whether to show a loading indicator",
    group: GROUPS.data,
  }),
  onPress: createActionProp(),
};

const DEFAULT_LAYOUT = {
  minWidth: 64,
  borderStyle: "solid",
  height: 40,
  paddingHorizontal: 12,
  justifyContent: "center",
};

export const SEED_DATA = [
  {
    name: "Button Outline",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    layout: DEFAULT_LAYOUT,
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
  },
  {
    name: "Button Solid",
    tag: "Button",
    category: COMPONENT_TYPES.button,
    layout: DEFAULT_LAYOUT,
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
  },
];
