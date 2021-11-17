import * as React from "react";
// @ts-ignore
import { Marker } from "./ReactNativeMaps";
import { MapMarkerProps } from "@draftbit/types";

const MapMarker: React.FC<MapMarkerProps> = ({
  latitude,
  longitude,
  title,
  description,
  pinColor,
  flat,
  style,
  children,
}) => (
  // @ts-ignore
  <Marker
    coordinate={{
      latitude,
      longitude,
    }}
    title={title}
    description={description}
    flat={flat}
    pinColor={pinColor}
    style={style}
  >
    {children}
    {/* @ts-ignore */}
  </Marker>
);

export default MapMarker;
