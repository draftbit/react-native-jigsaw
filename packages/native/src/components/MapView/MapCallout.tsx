import * as React from "react";
// @ts-ignore
import { Callout } from "./ReactNativeMaps";
import { MapCalloutProps } from "@draftbit/types";

const MapCallout: React.FC<MapCalloutProps> = ({
  onPress,
  showTooltip,
  children,
}) => (
  // @ts-ignore
  <Callout tooltip={!showTooltip} onPress={onPress}>
    {children}
    {/* @ts-ignore */}
  </Callout>
);

export default MapCallout;
