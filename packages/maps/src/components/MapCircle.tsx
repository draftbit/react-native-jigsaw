import * as React from "react";
import { Platform } from "react-native";
import { Circle as MapCircleComponent } from "./react-native-maps";
import type { MapCircleProps as MapCircleComponentProps } from "react-native-maps";
import { withTheme, DefaultTheme } from "@draftbit/ui";
import Color from "color";

export interface MapCircleProps
  extends Omit<MapCircleComponentProps, "center"> {
  latitude: number;
  longitude: number;
  theme: typeof DefaultTheme;
}

const MapCircle: React.FC<React.PropsWithChildren<MapCircleProps>> = ({
  theme,
  latitude,
  longitude,
  radius = 2000,
  fillColor: fillColorProp = theme.colors.primary,
  strokeColor = theme.colors.primary,
  ...rest
}) => {
  // Web maps by default uses a lower opacity for the circle, native needs an extra step
  const fillColor =
    Platform.OS === "web"
      ? fillColorProp
      : Color(fillColorProp).alpha(0.3).rgb().string();

  return (
    <MapCircleComponent
      center={{
        latitude,
        longitude,
      }}
      radius={radius}
      fillColor={fillColor}
      strokeColor={strokeColor}
      {...rest}
    />
  );
};

export default withTheme(MapCircle);
