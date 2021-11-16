import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
// @ts-ignore
import type { ViewStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

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
