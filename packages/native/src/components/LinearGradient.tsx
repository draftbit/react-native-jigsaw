import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { extractStyles } from "../../../core/src/utilities";

type LinearGradientComponentProps = {
  color1: string;
  color2: string;
  color3?: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const LinearGradientComponent = ({
  children,
  color1,
  color2,
  color3 = undefined,
  startX = 0,
  startY = 0,
  endX = 100,
  endY = 100,
  style,
}: LinearGradientComponentProps) => {
  // const { viewStyles } = extractStyles(style);
  const colors = [color1, color2, color3].filter((color) => color) as string[];
  const start = { x: startX / 100, y: startY / 100 };
  const end = { x: endX / 100, y: endY / 100 };
  return (
    <LinearGradient {...{ colors, start, end, style }}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientComponent;
