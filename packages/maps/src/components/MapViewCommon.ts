import React from "react";
import { LatLng, Region } from "react-native-maps";

export type ZoomLocation = LatLng & {
  zoom?: number;
};

interface MapViewContextType {
  region: Region | null;
  animateToLocation: (location: ZoomLocation) => void;
}

export const MapViewContext = React.createContext<MapViewContextType>({
  region: null,
  animateToLocation: () => {},
});
