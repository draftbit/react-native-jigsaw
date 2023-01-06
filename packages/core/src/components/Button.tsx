import React, { useCallback } from "react";
import {
  Text,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  Platform,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

import { withTheme } from "../theming";

import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

const CONSTANTS = {
  baseHeight: 42,
  borderRadius: 4,
  padding: 8,
  icon: 24,
};

type BaseProps = {
  title: string;
  disabled: boolean;
  loading: boolean;
  style?: TextStyle;
  onPress: () => void;
  onLongPress?: () => void;
  activeOpacity?: number;
  disabledOpacity?: number;
  delayLongPress?: number;
  hitSlop?: number;
  pressRetentionOffset?: number;
  icon?: string;
} & PressableProps &
  IconSlot;

type Props = {
  title: string;
  disabled: boolean;
  loading: boolean;
  style?: TextStyle;
  onPress: () => void;
  onLongPress?: () => void;
  activeOpacity?: number;
  disabledOpacity?: number;
  delayLongPress?: number;
  hitSlop?: number;
  pressRetentionOffset?: number;
  icon?: string;
  theme: Theme;
} & PressableProps &
  IconSlot;

export type StyleType = (
  state: PressableStateCallbackType
) => StyleProp<ViewStyle>;

function Base({
  Icon,
  icon,
  title,
  onPress,
  onLongPress,
  activeOpacity,
  disabledOpacity,
  loading,
  disabled,
  style,
  ...props
}: BaseProps): JSX.Element {
  const {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
    ...buttonStyles
  } = StyleSheet.flatten(style || ({} as TextStyle));

  const titleStyles: TextStyle = {
    color,
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    textTransform,
    textAlign,
    textDecorationLine,
    textDecorationColor,
    textDecorationStyle,
  };

  if (textAlign === "left") {
    buttonStyles.justifyContent = "flex-start";
  }

  if (textAlign === "right") {
    buttonStyles.justifyContent = "flex-end";
  }

  const getOpacity = useCallback(
    (pressed: boolean) => {
      if (disabled) {
        return disabledOpacity;
      } else {
        if (pressed) return activeOpacity;
        else return 1;
      }
    },
    [activeOpacity, disabled, disabledOpacity]
  );
  const _style = useCallback<StyleType>(
    ({ pressed }) => [
      buttonStyles as ViewStyle,
      { opacity: getOpacity(pressed) },
    ],
    [getOpacity, buttonStyles]
  );

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled || loading}
      style={(styles.base, _style)}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color} style={styles.loading} />
      ) : null}
      {icon && !loading ? (
        <Icon
          name={icon}
          color={color as string}
          style={styles.icon}
          size={CONSTANTS.icon}
        />
      ) : null}
      <Text style={titleStyles}>{title}</Text>
    </Pressable>
  );
}

const Solid = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base
      style={[
        {
          color: "#FFF",
          borderRadius: theme.roundness,
          backgroundColor: theme.colors.primary,
        },
        style,
      ]}
      {...props}
    />
  );
};

const ButtonSolid: any = withTheme(Solid);
export { ButtonSolid };

const Button: any = withTheme(Solid);
export { Button };

const Outline = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base
      style={[
        styles.outline,
        {
          borderRadius: theme.roundness,
          borderColor: theme.colors.primary,
          color: theme.colors.primary,
        },
        style,
      ]}
      {...props}
    />
  );
};

const ButtonOutline: any = withTheme(Outline);
export { ButtonOutline };

const styles = StyleSheet.create({
  base: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: CONSTANTS.padding,
    paddingLeft: CONSTANTS.padding,
    paddingRight: CONSTANTS.padding,
    paddingBottom: CONSTANTS.padding,
    fontFamily: "System",
    fontWeight: "700",
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  loading: {
    marginRight: 6,
  },
  icon: {
    ...Platform.select({
      web: {
        marginTop: 1,
        marginRight: 4,
        alignSelf: "center",
      },
      default: {
        marginBottom: 2,
        marginRight: 4,
        alignSelf: "center",
      },
    }),
  },
});
