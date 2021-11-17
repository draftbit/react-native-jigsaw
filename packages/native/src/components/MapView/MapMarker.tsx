import * as React from "react";
import { Marker } from "react-native-maps";
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
  </Marker>
);

export default MapMarker;
