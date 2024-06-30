import * as React from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  PressableProps,
} from "react-native";
import color from "color";
import Config from "../components/Config";
import Elevation from "../components/Elevation";
import { withTheme } from "@draftbit/theme";

import type { ReadTheme } from "@draftbit/theme";
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
  theme: ReadTheme;
} & PressableProps &
  IconSlot;

/**
 * @deprecated DEPRECATED
 */
const Button: React.FC<React.PropsWithChildren<Props>> = ({
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
  theme: { colors, typography },
  ...rest
}) => {
  let backgroundColor, borderColor, textColor, borderWidth;
  const buttonColor = colorOverride || colors.branding.primary;

  if (type === "solid") {
    backgroundColor = buttonColor;

    if (disabled) {
      textColor = color(colors.background.brand).alpha(0.5).rgb().string();
    } else {
      textColor = labelColor || colors.background.brand;
    }
  } else {
    backgroundColor = "transparent";

    if (disabled) {
      textColor = color(buttonColor).alpha(0.5).rgb().string();
    } else {
      textColor = labelColor || buttonColor;
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

  const buttonStyle = {
    backgroundColor,
    borderColor,
    borderWidth,
    borderRadius: 8,
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

  return (
    <Elevation style={{ elevation, alignSelf: "stretch" }}>
      <Pressable
        {...rest}
        onPress={onPress}
        accessibilityState={{ disabled }}
        accessibilityRole="button"
        disabled={disabled || loading}
        style={[styles.button, buttonStyle]}
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
      </Pressable>
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
