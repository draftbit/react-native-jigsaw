import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
// @ts-ignore
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "@draftbit/types";

export function Center({
  width = 240,
  height = 200,
  children,
  bgColor,
  style,
  ...rest
}: {
  width: number;
  height: number;
  bgColor: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          width,
          height,
          backgroundColor: bgColor,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

export function Circle({
  size = 50,
  bgColor,
  children,
  style,
  ...rest
}: {
  size: number;
  bgColor: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const borderRadius = 1000;
  return (
    <Center
      width={size}
      height={size}
      bgColor={bgColor}
      style={[
        style,
        { backgroundColor: bgColor, borderRadius, overflow: "hidden" },
      ]}
      {...rest}
    >
      {children}
    </Center>
  );
}

export function Square({
  size = 50,
  bgColor,
  children,
  style,
  ...rest
}: {
  size: number;
  bgColor: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Center
      style={style}
      width={size}
      height={size}
      bgColor={bgColor}
      {...rest}
    >
      {children}
    </Center>
  );
}

export function Row({
  justifyContent,
  alignItems,
  children,
  style,
  ...rest
}: {
  alignItems: ViewStyleProp.alignItems;
  justifyContent: ViewStyleProp.justifyContent;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        style, // style goes first b/c we can't override these
        {
          alignItems,
          flexDirection: "row",
          justifyContent: justifyContent,
        },
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

export function Spacer({
  top = 8,
  right = 8,
  bottom = 8,
  left = 8,
  children,
  style,
  ...rest
}: {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View
      style={[
        style,
        {
          paddingRight: right,
          paddingTop: top,
          paddingLeft: left,
          paddingBottom: bottom,
        },
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

export function Stack({
  children,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  style,
  ...rest
}: {
  justifyContent: ViewStyleProp.justifyContent;
  alignItems: ViewStyleProp.alignItems;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    // style must go first since we don't want justifyContent, alignItems overridden
    <View style={[style, { justifyContent, alignItems }]} {...rest}>
      {children}
    </View>
  );
}

export const SEED_DATA = [
  {
    name: "Row",
    tag: "Row",
    category: COMPONENT_TYPES.layout,
    props: {
      justifyContent: {
        label: "Align Horizontally",
        group: GROUPS.style,
        description: "Align Items Horizontally (on the X Axis)",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
        required: false,
      },
      alignItems: {
        label: "Align Vertically",
        group: GROUPS.style,
        description: "Align Items Vertically (on the Y Axis)",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
        required: false,
      },
    },
  },
  {
    name: "Spacer",
    tag: "Spacer",
    category: COMPONENT_TYPES.layout,
    props: {
      top: {
        label: "Top",
        description: "Top",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 8,
        editable: true,
        required: false,
      },
      right: {
        label: "Right",
        description: "Right",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 8,
        editable: true,
        required: false,
      },
      bottom: {
        label: "Bottom",
        description: "Bottom",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 8,
        editable: true,
        required: false,
      },
      left: {
        label: "Left",
        description: "Left",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 8,
        editable: true,
        required: false,
      },
    },
  },
  {
    name: "Stack",
    tag: "Stack",
    category: COMPONENT_TYPES.layout,
    props: {
      justifyContent: {
        group: GROUPS.style,
        label: "Justify",
        description: "Justify horizontally",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
        required: false,
      },
      alignItems: {
        group: GROUPS.style,
        label: "Align",
        description: "Vertical align",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
        required: false,
      },
    },
  },
  {
    name: "Center",
    tag: "Center",
    category: COMPONENT_TYPES.layout,
    props: {
      width: {
        label: "Width",
        description: "Width",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 240,
        editable: true,
        required: false,
      },
      height: {
        label: "Height",
        description: "Height",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 200,
        editable: true,
        required: false,
      },
      bgColor: {
        label: "Background Color",
        description: "Background color",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        editable: true,
        required: false,
        defaultValue: "light",
        group: GROUPS.style,
      },
    },
  },
  {
    name: "Circle",
    tag: "Circle",
    category: COMPONENT_TYPES.layout,
    props: {
      size: {
        label: "Size",
        description: "Size",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 50,
        editable: true,
        required: false,
      },
      bgColor: {
        label: "Background Color",
        description: "Background color",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        editable: true,
        required: false,
        defaultValue: "light",
        group: GROUPS.style,
      },
    },
  },
  {
    name: "Square",
    tag: "Square",
    category: COMPONENT_TYPES.layout,
    props: {
      size: {
        label: "Size",
        description: "Size",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.style,
        defaultValue: 50,
        editable: true,
        required: false,
      },
      bgColor: {
        label: "Background Color",
        description: "Background color",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        editable: true,
        required: false,
        defaultValue: "light",
        group: GROUPS.style,
      },
    },
  },
];
