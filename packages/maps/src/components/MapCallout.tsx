import * as React from "react";
import { Callout as MapCalloutComponent } from "./react-native-maps";
import type { MapCalloutProps as MapCalloutComponentProps } from "react-native-maps";

export interface MapCalloutProps
  extends Omit<MapCalloutComponentProps, "tooltip"> {
  showTooltip?: boolean;
}

const MapCallout: React.FC<React.PropsWithChildren<MapCalloutProps>> = ({
  showTooltip,
  ...rest
}) => {
  return <MapCalloutComponent tooltip={!showTooltip} {...rest} />;
};

export default MapCallout;
