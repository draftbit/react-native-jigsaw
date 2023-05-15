import * as React from "react";
import { Callout as MapCalloutComponent } from "./react-native-maps";
import type { MapCalloutProps as MapCalloutComponentProps } from "react-native-maps";

export interface MapCalloutProps
  extends Omit<MapCalloutComponentProps, "tooltip"> {
  showTooltip?: boolean;
}

// Has to be a function named 'Callout' to be matched as a Callout component and not a custom view for marker
// See: https://github.com/teovillanueva/react-native-web-maps/blob/81278079c6f26a707d915d69de9a00080c305957/packages/react-native-web-maps/src/components/marker.web.tsx#L79
function Callout({
  showTooltip,
  ...rest
}: React.PropsWithChildren<MapCalloutProps>) {
  return <MapCalloutComponent tooltip={!showTooltip} {...rest} />;
}

Callout.name = "Callout";

export { Callout };
