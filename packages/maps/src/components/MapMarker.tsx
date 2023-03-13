import * as React from "react";
import { Image } from "react-native";
import { Marker } from "./ReactNativeMaps";
import { MapMarkerProps } from "@draftbit/types";

const MapMarker: React.FC<React.PropsWithChildren<MapMarkerProps>> = ({
  latitude,
  longitude,
  title,
  description,
  pinColor,
  pinImageUrl,
  pinImageSize = 50,
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
      {pinImageUrl && (
        <Image
          source={{ uri: pinImageUrl }}
          style={{
            height: pinImageSize,
            width: pinImageSize,
            resizeMode: "contain",
          }}
        />
      )}
      {children}
    </Marker>
  );
};

export default MapMarker;
