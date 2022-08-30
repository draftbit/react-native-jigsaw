import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
declare type Props = {
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
declare const LinearGradient: React.FC<React.PropsWithChildren<Props>>;
export default LinearGradient;
