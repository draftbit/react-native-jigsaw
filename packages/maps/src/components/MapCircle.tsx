import * as React from "react";
import { Platform } from "react-native";
import { Circle as MapCircleComponent } from "./react-native-maps";
import type { MapCircleProps as MapCircleComponentProps } from "react-native-maps";
import { withTheme } from "@draftbit/theme";
import type { Theme } from "@draftbit/theme";
import Color from "color";

export interface MapCircleProps
  extends Omit<MapCircleComponentProps, "center"> {
  latitude: number;
  longitude: number;
  theme: Theme;
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
  const parsedColor = Color(fillColorProp);

  let fillColor;
  if (parsedColor.alpha() === 0) {
    fillColor = "transparent";
  } else if (Platform.OS !== "web") {
    // Web maps by default uses a lower opacity for the circle, native needs this extra step
    fillColor = parsedColor.alpha(0.3).rgb().string();
  } else {
    fillColor = fillColorProp;
  }

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
