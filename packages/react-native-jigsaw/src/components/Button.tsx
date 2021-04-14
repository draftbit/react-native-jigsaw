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
import { withTheme } from "../core/theming";

import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createTextProp,
  createActionProp,
} from "../core/component-types";

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
  icon?: string;
  IconOverride?: typeof Icon | null;
  theme: typeof Theme;
} & PressableProps;

type Props = {
  title: string;
  disabled: boolean;
  loading: boolean;
  style?: TextStyle;
  onPress: () => void;
  icon?: string;
  IconOverride?: typeof Icon | null;
  theme: typeof Theme;
} & PressableProps;

function Base({
  title,
  onPress,
  loading,
  disabled,
  style,
  icon,
  IconOverride = null,
  theme,
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
    color: color ? color : theme.colors.primary,
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
        <ActivityIndicator size="small" color={color} style={styles.loading} />
      ) : null}
      {icon && !loading ? (
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

const Solid = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base
      theme={theme}
      style={[
        {
          color: "#fff",
          backgroundColor: theme.colors.primary,
        },
        style,
      ]}
      {...props}
    />
  );
};

// @ts-ignore
const ButtonSolid = withTheme(Solid);
// @ts-ignore
export { ButtonSolid };

const Outline = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base
      theme={theme}
      style={[
        styles.outline,
        {
          borderColor: theme.colors.primary,
          color: theme.colors.primary,
        },
        style,
      ]}
      {...props}
    />
  );
};

// @ts-ignore
const ButtonOutline = withTheme(Outline);
// @ts-ignore
export { ButtonOutline };

export const BaseLink = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base theme={theme} style={[styles.bare, style]} hitSlop={8} {...props} />
  );
};

// @ts-ignore
const Link = withTheme(BaseLink);
// @ts-ignore
export { Link };

const styles = StyleSheet.create({
  base: {
    color: "black",
    textAlign: "center",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CONSTANTS.borderRadius,
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
  bare: {
    backgroundColor: "transparent",
    color: "black",
    alignSelf: "flex-start",
    padding: 0,
    minHeight: undefined,
  },
  loading: {
    marginRight: 4,
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

export default withTheme(Base);

const SEED_DATA_PROPS = {
  icon: createIconProp(),
  title: createTextProp({
    label: "Label",
    description: "Button Label",
    defaultValue: "Get Started",
  }),
  disabled: createBoolProp({
    label: "Disabled",
    description: "Whether the button should be disabled",
  }),
  loading: createBoolProp({
    label: "Loading",
    description: "Whether to show a loading indicator",
  }),
  onPress: createActionProp(),
};

const LAYOUT = {
  textAlign: "center",
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "transparent",
  justifyContent: "center",
  borderRadius: 8,
  minHeight: 42,
  fontFamily: "system-700",
};

export const SEED_DATA = [
  {
    name: "Button Outline",
    tag: "ButtonOutline",
    category: COMPONENT_TYPES.button,
    layout: {
      ...LAYOUT,
      backgroundColor: "transparent",
      borderWidth: 1,
    },
    props: SEED_DATA_PROPS,
  },
  {
    name: "Button Solid",
    tag: "ButtonSolid",
    category: COMPONENT_TYPES.button,
    layout: {
      ...LAYOUT,
      color: "#FFF",
      backgroundColor: "primary",
    },
    props: SEED_DATA_PROPS,
  },
  {
    name: "Link",
    tag: "Link",
    category: COMPONENT_TYPES.button,
    layout: {
      ...LAYOUT,
      backgroundColor: "transparent",
      color: "black",
      alignSelf: "flex-start",
      padding: 0,
      minHeight: undefined,
    },
    props: SEED_DATA_PROPS,
  },
];
