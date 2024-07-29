import * as React from "react";
import { StyleProp, ViewStyle, ActivityIndicator } from "react-native";
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

export enum LoadingType {
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
  type?: LoadingType;
  size?: number;
};

const Loading: React.FC<React.PropsWithChildren<Props>> = ({
  color,
  theme,
  type,
  size = 35,
  ...rest
}) => {
  switch (type) {
    case LoadingType.plane:
      return (
        <Plane size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.chase:
      return (
        <Chase size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.bounce:
      return (
        <Bounce size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.wave:
      return (
        <Wave size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.pulse:
      return (
        <Pulse size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.flow:
      return (
        <Flow size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.swing:
      return (
        <Swing size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.circle:
      return (
        <Circle size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.circleFade:
      return (
        <CircleFade
          size={size}
          color={color ?? theme.colors.branding.primary}
        />
      );
    case LoadingType.grid:
      return (
        <Grid size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.fold:
      return (
        <Fold size={size} color={color ?? theme.colors.branding.primary} />
      );
    case LoadingType.wander:
      return (
        <Wander size={size} color={color ?? theme.colors.branding.primary} />
      );
    default:
      return (
        <ActivityIndicator
          animating={true}
          hidesWhenStopped={true}
          size={"small"}
          color={theme.colors.branding.primary}
          {...rest}
        />
      );
  }
};

export default withTheme(Loading);
