import * as React from "react";
import {
  Text,
  Pressable,
  PressableProps,
  Platform,
  StyleSheet,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
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
  icon?: string;
  iconSize?: number;
  iconPosition?: "left" | "right";
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
  icon?: string;
  theme: ReadTheme;
} & PressableProps &
  IconSlot;

function Base({
  Icon,
  icon,
  iconPosition = "left",
  iconSize = CONSTANTS.icon,
  title,
  loading,
  disabled,
  style,
  activeOpacity = 0.8,
  disabledOpacity = 0.8,
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

  return (
    <Pressable
      disabled={disabled || loading}
      style={({ pressed }) => {
        return [
          styles.base,
          {
            opacity: pressed ? activeOpacity : disabled ? disabledOpacity : 1,
          },
          buttonStyles,
        ];
      }}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color} style={styles.loading} />
      ) : null}
      {iconPosition === "left" && icon && !loading ? (
        <Icon
          name={icon}
          color={color as string}
          style={styles.icon}
          size={iconSize}
        />
      ) : null}
      <Text style={titleStyles}>{title}</Text>
      {iconPosition === "right" && icon && !loading ? (
        <Icon
          name={icon}
          color={color as string}
          style={styles.icon}
          size={iconSize}
        />
      ) : null}
    </Pressable>
  );
}

const Solid = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base
      style={[
        {
          //@ts-ignore
          color: "#FFF",
          borderRadius: 8,
          backgroundColor: theme.colors.branding.primary,
        },
        style,
      ]}
      {...props}
    />
  );
};

/**
 * @deprecated DEPRECATED: Use Button
 */
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
          borderRadius: 8,
          borderColor: theme.colors.branding.primary,
          //@ts-ignore
          color: theme.colors.branding.primary,
        },
        style,
      ]}
      {...props}
    />
  );
};

/**
 * @deprecated DEPRECATED: Use Button
 */
const ButtonOutline: any = withTheme(Outline);
export { ButtonOutline };

const styles = StyleSheet.create({
  base: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: CONSTANTS.baseHeight,
    paddingHorizontal: 12,
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
