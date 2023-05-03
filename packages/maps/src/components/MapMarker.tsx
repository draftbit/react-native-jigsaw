import * as React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Marker as MapMarkerComponent } from "./ReactNativeMaps";
import type { MapMarkerProps as MapMarkerComponentProps } from "react-native-maps";

export interface MapMarkerProps
  extends Omit<MapMarkerComponentProps, "onPress" | "coordinate"> {
  latitude: number;
  longitude: number;
  pinImage?: string | ImageSourcePropType;
  pinImageSize?: number;
  onPress?: (latitude: number, longitude: number) => void;
}

const MapMarker: React.FC<React.PropsWithChildren<MapMarkerProps>> = ({
  latitude,
  longitude,
  pinImage,
  pinImageSize = 50,
  onPress,
  children,
  ...rest
}) => {
  return (
    <MapMarkerComponent
      coordinate={{
        latitude,
        longitude,
      }}
      onPress={(event) => {
        const coordinate = event.nativeEvent.coordinate;
        onPress?.(coordinate.latitude, coordinate.longitude);
      }}
      {...rest}
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
    </MapMarkerComponent>
  );
};

export default MapMarker;
