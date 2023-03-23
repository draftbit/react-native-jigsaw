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
  pinImage,
  pinImageSize = 50,
  onPress,
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
      onPress={(event: any) => {
        const coordinate = event.nativeEvent.coordinate;
        onPress?.(coordinate.latitude, coordinate.longitude);
      }}
      style={style}
    >
      {pinImage && (
        <Image
          source={typeof pinImage === "string" ? { uri: pinImage } : pinImage}
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
