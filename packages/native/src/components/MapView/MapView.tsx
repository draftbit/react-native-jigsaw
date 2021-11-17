import * as React from "react";
// @ts-ignore
import NativeMapView from "./ReactNativeMaps";
import { MapViewProps } from "@draftbit/types";

// Dynamically import from ./ReactNativeMaps so that we don't
// require react-native-maps unless we're in native.

const MapView: React.FC<MapViewProps> = ({
  provider,
  latitude,
  latitudeDelta,
  longitude,
  longitudeDelta,
  showsCompass = false,
  rotateEnabled = true,
  zoomEnabled = true,
  loadingEnabled = true,
  scrollEnabled = true,
  loadingBackgroundColor,
  loadingIndicatorColor,
  mapType = "standard",
  style,
  children,
}) => {
  return (
    // @ts-ignore
    <NativeMapView
      provider={provider}
      mapType={mapType}
      showsCompass={showsCompass}
      rotateEnabled={rotateEnabled}
      zoomEnabled={zoomEnabled}
      initialRegion={{
        latitude: latitude as number,
        longitude: longitude as number,
        latitudeDelta: latitudeDelta as number,
        longitudeDelta: longitudeDelta as number,
      }}
      loadingEnabled={loadingEnabled}
      scrollEnabled={scrollEnabled}
      loadingBackgroundColor={loadingBackgroundColor}
      loadingIndicatorColor={loadingIndicatorColor}
      style={style}
    >
      {children}
      {/* @ts-ignore */}
    </NativeMapView>
  );
};

export default MapView;
