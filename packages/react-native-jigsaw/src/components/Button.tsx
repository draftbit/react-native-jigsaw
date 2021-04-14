import * as React from "react";
import {
  Text,
  Pressable,
  Platform,
  StyleSheet,
  TextStyle,
  PressableProps,
  ActivityIndicator,
} from "react-native";

import Icon from "./Icon";
import Theme from "../styles/DefaultTheme";

const CONSTANTS = {
  baseHeight: 42,
  borderRadius: 4,
  padding: 8,
  icon: 24,
};

enum Type {
  Bare,
  Solid,
  Outline,
}

type Props = {
  title: string;
  disabled: boolean;
  loading: boolean;
  style?: TextStyle;
  onPress: () => void;
  icon?: string;
  IconOverride?: typeof Icon | null;
  theme: typeof Theme;
  type: Type;
} & PressableProps;

export function Base({
  title,
  onPress,
  loading,
  disabled,
  style,
  icon,
  IconOverride = null,
  type,
  ...props
}: Props) {
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
  } = StyleSheet.flatten(style || {});

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

  // Necessary to inject web-renderable Icons in buider.
  const SelectedIcon = IconOverride || Icon;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => {
        return [
          styles.base,
          {
            opacity: pressed || disabled ? 0.75 : 1,
          },
          buttonStyles,
        ];
      }}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={color}
          style={type === Type.Bare ? styles.bareLoading : styles.loading}
        />
      ) : null}
      {type !== Type.Bare && icon ? (
        <SelectedIcon
          name={icon}
          color={color as string}
          style={styles.icon}
          size={CONSTANTS.icon}
        />
      ) : null}
      {type === Type.Bare && icon && !loading ? (
        <SelectedIcon
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

export const ButtonSolid = ({ style, ...props }: Props) => {
  return <Base type={Type.Solid} style={[styles.solid, style]} {...props} />;
};

export const ButtonText = ({ style, ...props }: Props) => {
  return (
    <Base
      type={Type.Bare}
      style={[styles.bare, style]}
      hitSlop={8}
      {...props}
    />
  );
};

export const ButtonOutline = ({ style, ...props }: Props) => {
  return (
    <Base type={Type.Outline} style={[styles.outline, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  base: {
    color: "black",
    textAlign: "center",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
    borderRadius: CONSTANTS.borderRadius,
    height: CONSTANTS.baseHeight,
    padding: CONSTANTS.padding,
    ...Platform.select({
      web: {
        cursor: "pointer",
        userSelect: "none",
      },
    }),
  },
  solid: {
    backgroundColor: "#5a45ff",
    color: "#fff",
  },
  outline: {
    color: "#5a45ff",
    borderColor: "#5a45ff",
    borderWidth: 1,
  },
  bare: {
    color: "black",
    alignSelf: "flex-start",
    padding: 0,
    height: undefined,
  },
  bareLoading: {
    marginRight: 4,
  },
  loading: {
    position: "absolute",
    right: 12,
    top: 0,
    bottom: 0,
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
