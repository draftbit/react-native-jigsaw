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

import { withTheme } from "../theming";

import {
  COMPONENT_TYPES,
  createIconProp,
  createBoolProp,
  createTextProp,
  GROUPS,
  createActionProp,
  Triggers,
} from "@draftbit/types";
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
  icon?: string;
} & PressableProps &
  IconSlot;

type Props = {
  title: string;
  disabled: boolean;
  loading: boolean;
  style?: TextStyle;
  onPress: () => void;
  icon?: string;
  theme: Theme;
} & PressableProps &
  IconSlot;

function Base({
  Icon,
  icon,
  title,
  onPress,
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

export const BaseLink = ({ style, theme, ...props }: Props): JSX.Element => {
  return (
    <Base
      style={[styles.bare, { color: theme.colors.primary }, style]}
      hitSlop={8}
      {...props}
    />
  );
};

const Link: any = withTheme(BaseLink);
export { Link };

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
  bare: {
    backgroundColor: "transparent",
    padding: 0,
    minHeight: undefined,
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

const SEED_DATA_TRIGGERS = [Triggers.OnPress];
const SEED_DATA_PROPS = {
  onPress: createActionProp(),
  icon: createIconProp({
    defaultValue: null,
    required: false,
  }),
  title: createTextProp({
    label: "Label",
    description: "Button Label",
    defaultValue: "Get Started",
  }),
  disabled: createBoolProp({
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the button should be disabled",
  }),
  loading: createBoolProp({
    group: GROUPS.basic,
    label: "Loading",
    description: "Whether to show a loading indicator",
  }),
};

const LAYOUT = {
  backgroundColor: "transparent",
  borderRadius: 8,
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
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
  {
    name: "Button Solid",
    tag: "ButtonSolid",
    category: COMPONENT_TYPES.button,
    layout: {
      ...LAYOUT,
      backgroundColor: "primary",
      textAlign: "center",
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
  {
    name: "Link",
    tag: "Link",
    category: COMPONENT_TYPES.button,
    layout: {
      ...LAYOUT,
      backgroundColor: "transparent",
      color: "primary",
      padding: 0,
      minHeight: undefined,
    },
    triggers: SEED_DATA_TRIGGERS,
    props: SEED_DATA_PROPS,
  },
];
