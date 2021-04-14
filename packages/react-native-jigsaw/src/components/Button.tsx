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
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";

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

type BaseProps = {
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
  type,
  theme,
  ...props
}: BaseProps) {
  const {
    color = theme.colors.primary,
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

export const ButtonSolid = withTheme(({ style, ...props }: Props) => {
  return <Base type={Type.Solid} style={[styles.solid, style]} {...props} />;
});

export const ButtonText = withTheme(({ style, ...props }: Props) => {
  return (
    <Base
      type={Type.Bare}
      style={[styles.bare, style]}
      hitSlop={8}
      {...props}
    />
  );
});

export const ButtonOutline = withTheme(({ style, ...props }: Props) => {
  return (
    <Base type={Type.Outline} style={[styles.outline, style]} {...props} />
  );
});

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

export default withTheme(Base);

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
  title: {
    group: GROUPS.data,
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Get Started",
  },
  disabled: {
    group: GROUPS.data,
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
    tag: "ButtonOutline",
    category: COMPONENT_TYPES.button,
    layout: {},
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
    tag: "ButtonSolid",
    layout: {},
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
  {
    name: "Button Text",
    tag: "ButtonText",
    layout: {},
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
