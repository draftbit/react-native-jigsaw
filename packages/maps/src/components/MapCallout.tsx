import * as React from "react";
import type { MapCalloutProps as MapCalloutComponentProps } from "react-native-maps";
import { Callout as MapCalloutComponent } from "./react-native-maps";

export interface MapCalloutProps
  extends Omit<MapCalloutComponentProps, "tooltip"> {
  showTooltip?: boolean;
}

/**
 * Renders nothing, serves as placeholder for props
 * Rendering exposed as function to avoid having an intermediary component that changes the type
 *
 * This is done because the underlying package has logic dependant on the type of child
 * See: https://github.com/teovillanueva/react-native-web-maps/blob/5f3d0ec7c24f789c3df30c1d6d7223e638ff5868/packages/react-native-web-maps/src/components/marker.web.tsx#L79
 */
const MapCallout: React.FC<React.PropsWithChildren<MapCalloutProps>> = () => {
  return null;
};

export function renderCallout(props: MapCalloutProps, key: React.Key) {
  return (
    <MapCalloutComponent key={key} tooltip={!props.showTooltip} {...props} />
  );
}

export default MapCallout;
