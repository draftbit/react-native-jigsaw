import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
// @ts-ignore
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";

export function Center({
  width,
  height,
  children,
  bgColor,
  style,
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
    >
      {children}
    </View>
  );
}

export function Circle({
  size,
  bgColor,
  children,
}: {
  size: number;
  bgColor: string;
  children: React.ReactNode;
}) {
  const borderRadius = 1000;
  return (
    <Center
      width={size}
      height={size}
      bgColor={bgColor}
      style={{ backgroundColor: bgColor, borderRadius }}
    >
      {children}
    </Center>
  );
}

export function Square({
  size,
  bgColor,
  children,
}: {
  size: number;
  bgColor: string;
  children: React.ReactNode;
}) {
  return (
    <Center width={size} height={size} bgColor={bgColor}>
      {children}
    </Center>
  );
}

export function Row({
  justifyContent,
  alignItems,
  children,
}: {
  alignItems: ViewStyleProp.alignItems;
  justifyContent: ViewStyleProp.justifyContent;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        alignItems,
        flexDirection: "row",
        justifyContent: justifyContent,
      }}
    >
      {children}
    </View>
  );
}

export function Space({
  top,
  right,
  bottom,
  left,
  children,
}: {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        paddingRight: right,
        paddingTop: top,
        paddingLeft: left,
        paddingBottom: bottom,
      }}
    >
      {children}
    </View>
  );
}

export function Stack({
  children,
  justifyContent,
  alignItems,
}: {
  justifyContent: ViewStyleProp.justifyContent;
  alignItems: ViewStyleProp.alignItems;
  children: React.ReactNode;
}) {
  return <View style={{ justifyContent, alignItems }}>{children}</View>;
}

export const SEED_DATA = [
  {
    name: "Row",
    tag: "Row",
    category: COMPONENT_TYPES.layout,
    props: {
      justifyContent: {
        label: "Align Horizontally",
        group: GROUPS.basic,
        description: "Align Items Horizontally (on the X Axis)",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
        required: false,
      },
      alignItems: {
        label: "Align Vertically",
        group: GROUPS.basic,
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
    name: "Space",
    tag: "Space",
    category: COMPONENT_TYPES.layout,
    props: {
      top: {
        label: "Top",
        description: "Top",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
        required: false,
      },
      right: {
        label: "Right",
        description: "Right",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
        required: false,
      },
      bottom: {
        label: "Bottom",
        description: "Bottom",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
        required: false,
      },
      left: {
        label: "Left",
        description: "Left",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
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
        label: "Justify",
        description: "Justify horizontally",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
        required: false,
      },
      alignItems: {
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
        group: GROUPS.basic,
        defaultValue: 50,
        editable: true,
        required: false,
      },
      height: {
        label: "Height",
        description: "Height",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 50,
        editable: true,
        required: false,
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
        group: GROUPS.basic,
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
        defaultValue: null,
        group: GROUPS.basic,
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
        group: GROUPS.basic,
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
        defaultValue: null,
        group: GROUPS.basic,
      },
    },
  },
];
