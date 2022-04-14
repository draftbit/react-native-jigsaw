import * as React from "react";
import { Callout } from "./ReactNativeMaps";
import { MapCalloutProps } from "@draftbit/types";

const MapCallout: React.FC<MapCalloutProps> = ({
  onPress,
  showTooltip,
  children,
}) => {
  if (!Callout) {
    return null;
  }

  return (
    <Callout tooltip={!showTooltip} onPress={onPress}>
      {children}
    </Callout>
  );
};

export default MapCallout;
