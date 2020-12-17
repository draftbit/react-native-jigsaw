import * as React from "react";
import { View } from "react-native";

import {
  GROUPS,
  FORM_TYPES,
  PROP_TYPES,
  COMPONENT_TYPES,
} from "../core/component-types";

export function Row({
  justifyContent,
  alignItems,
  children,
}: {
  alignItems?: string;
  justifyContent?: string;
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
  justifyContent?: string;
  alignItems?: string;
  children: React.ReactNode;
}) {
  return <View style={{ justifyContent, alignItems }}>{children}</View>;
}

export const SEED_DATA = [
  {
    name: "Row",
    tag: "Row",
    category: COMPONENT_TYPES.basic,
    props: {
      wrap: {
        label: "Wrap",
        group: GROUPS.basic,
        description: "Justify horizontally",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
      },
      justifyContent: {
        label: "Justify",
        group: GROUPS.basic,
        description: "Justify horizontally",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
      },
      alignItems: {
        label: "Align",
        group: GROUPS.basic,
        description: "Vertical align",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
      },
    },
  },
  {
    name: "Space",
    tag: "Space",
    category: COMPONENT_TYPES.basic,
    props: {
      top: {
        label: "Top",
        description: "Top",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
      },
      right: {
        label: "Right",
        description: "Right",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
      },
      bottom: {
        label: "Bottom",
        description: "Bottom",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
      },
      left: {
        label: "Left",
        description: "Left",
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        group: GROUPS.basic,
        defaultValue: 0,
        editable: true,
      },
    },
  },
  {
    name: "Stack",
    tag: "Stack",
    category: COMPONENT_TYPES.basic,
    props: {
      justifyContent: {
        label: "Justify",
        description: "Justify horizontally",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
      },
      alignItems: {
        label: "Align",
        description: "Vertical align",
        formType: FORM_TYPES.string,
        propType: PROP_TYPES.STRING,
        defaultValue: "flex-start",
        editable: true,
      },
    },
  },
];
