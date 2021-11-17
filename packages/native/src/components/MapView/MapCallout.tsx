import * as React from "react";
import { Callout } from "react-native-maps";
import { MapCalloutProps } from "@draftbit/types";

const MapCallout: React.FC<MapCalloutProps> = ({
  onPress,
  showTooltip,
  children,
}) => (
  <Callout tooltip={!showTooltip} onPress={onPress}>
    {children}
  </Callout>
);

export default MapCallout;
