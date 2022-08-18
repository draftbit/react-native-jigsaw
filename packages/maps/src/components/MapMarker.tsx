import * as React from "react";
import { Marker } from "./ReactNativeMaps";
import { MapMarkerProps } from "@draftbit/types";

const MapMarker: React.FC<React.PropsWithChildren<MapMarkerProps>> = ({
  latitude,
  longitude,
  title,
  description,
  pinColor,
  flat,
  style,
  children,
}) => {
  if (!Marker) {
    return null;
  }

  return (
    <Marker
      coordinate={{
        latitude,
        longitude,
      }}
      title={title != null ? String(title) : undefined}
      description={description != null ? String(description) : undefined}
      flat={flat}
      pinColor={pinColor}
      style={style}
    >
      {children}
    </Marker>
  );
};

export default MapMarker;
