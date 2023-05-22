import { StyleProp, ViewStyle } from "react-native";
import { Theme } from "../../styles/DefaultTheme";

type LineCap = "round" | "square";

export const DEFAULT_ANIMATION_DURATION = 500;

export interface BaseProgressProps {
  thickness?: number;
  trackThickness?: number;
  color?: string;
  trackColor?: string;
  trackOpacity?: number;
  showTrack?: boolean;
  animationDuration?: number;
  isAnimated?: boolean;
  lineCap?: LineCap;
  trackLineCap?: LineCap;
  dashWidth?: string | number;
  trackDashWidth?: string | number;
  dashGap?: string | number;
  trackDashGap?: string | number;
  dashOffset?: string | number;
  trackDashOffset?: string | number;
  customDashArray?: string;
  trackCustomDashArray?: string;
  onFullPathWidth?: (width: number) => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}
export interface ValueProgressProps extends BaseProgressProps {
  value?: number;
  minimumValue?: number;
  maximumValue?: number;
}

export interface IndeterminateProgressProps extends BaseProgressProps {
  indeterminate?: boolean;
}

export interface CircularProgressProps {
  startPosition?: "left" | "top" | "right" | "bottom";
}
