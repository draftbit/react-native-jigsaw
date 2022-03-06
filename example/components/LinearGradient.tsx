import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { LinearGradient as LG } from "expo-linear-gradient";

export interface LinearGradientProps {
  color1: string;
  color2: string;
  color3?: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const LinearGradient = ({
  children,
  color1 = "rgba(90, 69, 255, 1)",
  color2 = "rgba(59, 201, 234, 1)",
  color3 = undefined,
  startX = 0,
  startY = 0,
  endX = 100,
  endY = 100,
  style = { flex: 1, display: "flex", height: "100%", width: "100%" },
}: LinearGradientProps) => {
  const colors = [color1, color2, color3].filter((color) => color) as string[];
  const start = { x: startX / 100, y: startY / 100 };
  const end = { x: endX / 100, y: endY / 100 };
  return (
    <LG colors={colors} start={start} end={end} style={style}>
      {children}
    </LG>
  );
};

export default LinearGradient;
