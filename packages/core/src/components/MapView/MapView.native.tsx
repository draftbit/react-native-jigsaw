import * as React from "react";
import NativeMapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { MapViewProps } from "./types";
import NoApiKey from "./NoApiKey";
import {
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createTextProp,
} from "@draftbit/types";

const MapView: React.FC<MapViewProps> = ({
  provider = PROVIDER_GOOGLE,
  apiKey,
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
  if (!apiKey) {
    return <NoApiKey />;
  }

  return (
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
    </NativeMapView>
  );
};

export default MapView;

export const SEED_DATA = {
  name: "Map View",
  tag: "MapView",
  description: "A map view",
  category: COMPONENT_TYPES.media,
  layout: {},
  props: {
    apiKey: createTextProp({
      label: "API Key",
      description: "Your API Key",
      required: true,
      defaultValue: null,
    }),
    provider: createTextProp({
      label: "Provider",
      description: "The maps provider",
      required: false,
      defaultValue: "google",
      options: ["google"],
    }),
    latitudeDelta: createNumberProp({
      label: "Latitude Delta",
      description: "The latitude delta for the map's initial region",
      required: false,
      precision: 0.0001,
    }),
    longitudeDelta: createNumberProp({
      label: "Longitude Delta",
      description: "The longitude delta for the map's initial region",
      required: false,
      precision: 0.0001,
    }),
    latitude: createNumberProp({
      label: "Latitude",
      description: "The longitude for the map's initial region",
      required: false,
      precision: 0.000001,
      min: -90,
      max: 90,
    }),
    longitude: createNumberProp({
      label: "Latitude",
      description: "The latitude for the map's initial region",
      required: false,
      precision: 0.000001,
      min: -180,
      max: 180,
    }),
    mapType: createTextProp({
      label: "Map Type",
      description: "The type of map to show",
      required: false,
      defaultValue: "standard",
      options: [
        "standard",
        "satellite",
        "hybrid",
        "terrain",
        "none",
        "mutedStandard",
      ],
    }),
    zoomEnabled: createBoolProp({
      label: "Zoom Enabled",
      description: "Whether zooming is enabled",
      required: false,
      defaultValue: true,
    }),
    showsCompass: createBoolProp({
      label: "Shows Compass",
      description: "Whether compass is shown",
      required: false,
      defaultValue: false,
    }),
    rotateEnabled: createBoolProp({
      label: "Rotate Enabled",
      description: "Whether rotating the map is enabled",
      required: false,
      defaultValue: true,
    }),
    scrollEnabled: createBoolProp({
      label: "Scroll Enabled",
      description: "Whether scrolling the map view is enabled",
      required: false,
      defaultValue: true,
    }),
    loadingEnabled: createBoolProp({
      label: "Loading Enabled",
      description:
        "If true a loading indicator will show while the map is loading",
      required: false,
      defaultValue: true,
    }),
    loadingIndicatorColor: createColorProp({
      label: "Loading Indicator Color",
      description: "Color of the loading indicator",
    }),
    loadingBackgroundColor: createColorProp({
      label: "Loading Background Color",
      description: "Color of the background to show while the map is loading",
    }),
  },
};
