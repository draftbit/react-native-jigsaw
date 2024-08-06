import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  ActivityIndicator as ActivityIndicatorRN,
  View,
  Platform,
} from "react-native";
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

export enum ActivityIndicatorType {
  default = "default",
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
  type?: ActivityIndicatorType;
  size?: number | "small" | "large";
};

const SPINNER_COMPONENTS = {
  [ActivityIndicatorType.plane]: Plane,
  [ActivityIndicatorType.chase]: Chase,
  [ActivityIndicatorType.bounce]: Bounce,
  [ActivityIndicatorType.wave]: Wave,
  [ActivityIndicatorType.pulse]: Pulse,
  [ActivityIndicatorType.flow]: Flow,
  [ActivityIndicatorType.swing]: Swing,
  [ActivityIndicatorType.circle]: Circle,
  [ActivityIndicatorType.circleFade]: CircleFade,
  [ActivityIndicatorType.grid]: Grid,
  [ActivityIndicatorType.fold]: Fold,
  [ActivityIndicatorType.wander]: Wander,
};

const smallActivityIndicatorSize = 20;
const largeActivityIndicatorSize = 40;

const getLoadingSizeNumber = (size?: number | "small" | "large"): number => {
  if (typeof size === "number") return size;
  return size === "large"
    ? largeActivityIndicatorSize
    : smallActivityIndicatorSize;
};

const getScaleLevel = (size?: number | "small" | "large"): number => {
  if (typeof size === "number") return size / smallActivityIndicatorSize;
  return size === "large" ? 2 : 1;
};

const ActivityIndicator: React.FC<React.PropsWithChildren<Props>> = ({
  theme,
  color = theme.colors.branding.primary,
  type = ActivityIndicatorType.default,
  size = "small",
  style,
  ...rest
}) => {
  const sizeNumber = getLoadingSizeNumber(size);
  const spinnerColor = color ?? theme.colors.branding.primary;

  // Handle display spinner type
  if (type !== ActivityIndicatorType.default) {
    if (type && SPINNER_COMPONENTS[type]) {
      const SpinnerComponent = SPINNER_COMPONENTS[type];
      return (
        <SpinnerComponent
          size={sizeNumber}
          color={spinnerColor}
          style={style}
        />
      );
    }
  }

  // This is due to limitations with iOS UIActivityIndicator
  // Refer: https://github.com/facebook/react-native/issues/12250
  const scaleLevel = getScaleLevel(size);
  if (Platform.OS === "ios") {
    return (
      <View
        style={[
          style,
          {
            transform: [{ scale: scaleLevel }],
          },
        ]}
      >
        <ActivityIndicatorRN
          animating={true}
          hidesWhenStopped={true}
          size={"small"}
          color={spinnerColor}
          {...rest}
        />
      </View>
    );
  }
  return (
    <ActivityIndicatorRN
      animating={true}
      hidesWhenStopped={true}
      size={size}
      color={spinnerColor}
      style={style}
      {...rest}
    />
  );
};

export default withTheme(ActivityIndicator);
