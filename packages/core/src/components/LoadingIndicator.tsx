import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";
import {
  Bounce,
  Chase,
  Circle,
  CircleFade,
  Flow,
  Fold,
  Grid,
  Plane,
  Pulse,
  Swing,
  Wander,
  Wave,
} from "react-native-animated-spinkit";

export enum LoadingIndicatorType {
  plane = "plane",
  chase = "chase",
  bounce = "bounce",
  wave = "wave",
  pulse = "pulse",
  flow = "flow",
  swing = "swing",
  circle = "circle",
  circleFade = "circleFade",
  grid = "grid",
  fold = "fold",
  wander = "wander",
}

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  theme: ReadTheme;
  type?: LoadingIndicatorType;
  size?: number;
};

const SPINNER_COMPONENTS = {
  [LoadingIndicatorType.plane]: Plane,
  [LoadingIndicatorType.chase]: Chase,
  [LoadingIndicatorType.bounce]: Bounce,
  [LoadingIndicatorType.wave]: Wave,
  [LoadingIndicatorType.pulse]: Pulse,
  [LoadingIndicatorType.flow]: Flow,
  [LoadingIndicatorType.swing]: Swing,
  [LoadingIndicatorType.circle]: Circle,
  [LoadingIndicatorType.circleFade]: CircleFade,
  [LoadingIndicatorType.grid]: Grid,
  [LoadingIndicatorType.fold]: Fold,
  [LoadingIndicatorType.wander]: Wander,
};

const LoadingIndicator: React.FC<React.PropsWithChildren<Props>> = ({
  theme,
  color = theme.colors.branding.primary,
  type = LoadingIndicatorType.plane,
  size,
  style,
  ...rest
}) => {
  const spinnerColor = color ?? theme.colors.branding.primary;
  const SpinnerComponent = SPINNER_COMPONENTS[type];
  return (
    <SpinnerComponent
      size={size}
      color={spinnerColor}
      style={style}
      {...rest}
    />
  );
};

export default withTheme(LoadingIndicator);
