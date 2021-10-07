import * as React from "react";
import { Marker } from "react-native-maps";
import { MapMarkerProps } from "./types";
import {
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createTextProp,
} from "@draftbit/types";

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

export const SEED_DATA = {
  name: "Map Marker",
  tag: "MapMarker",
  description: "A marker to show inside map view",
  category: COMPONENT_TYPES.button,
  layout: {},
  props: {
    latitude: createNumberProp({
      label: "Latitude",
      description: "The longitude in which the marker is located",
      required: true,
      precision: 0.000001,
      min: -90,
      max: 90,
    }),
    longitude: createNumberProp({
      label: "Latitude",
      description: "The latitude in which the marker is located",
      required: true,
      precision: 0.000001,
      min: -180,
      max: 180,
    }),
    title: createTextProp({
      label: "Title",
      description: "Title to show along with the marker",
      defaultValue: null,
    }),
    description: createTextProp({
      label: "Description",
      description: "Optional description for the marker",
      defaultValue: null,
    }),
    flat: createBoolProp({
      label: "Flat",
      description:
        "Sets whether this marker should be flat against the map (if true) or a billboard facing the camera (if false)",
      defaultValue: false,
    }),
    pinColor: createColorProp({
      label: "Pin Color",
      description: "Sets the color of the marker",
    }),
  },
};
