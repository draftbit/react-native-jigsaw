import * as React from "react";
import { GoogleMap, LoadScript } from "./ReactGoogleMaps";
import NoApiKey from "./NoApiKey";
import { MapViewProps } from "@draftbit/types";
import { StyleSheet } from "react-native";

const MapView: React.FC<MapViewProps> = ({
  apiKey,
  latitude,
  longitude,
  rotateEnabled = true,
  scrollEnabled = true,
  mapType = "standard",
  style,
  children,
}) => {
  console.log("web maps!");
  if (!LoadScript || !GoogleMap) {
    return null;
  }

  if (!apiKey) {
    return <NoApiKey />;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={StyleSheet.flatten(style) as React.CSSProperties}
        center={{
          lat: latitude || 0,
          lng: longitude || 0,
        }}
        mapTypeId={mapType}
        zoom={14}
        options={{
          scrollwheel: scrollEnabled,
          rotateControl: rotateEnabled,
        }}
      >
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
