import React from "react";

interface MapMarkerClusterContextType {
  markerCount: number;
}

export const MapMarkerClusterContext =
  React.createContext<MapMarkerClusterContextType>({
    markerCount: 0,
  });
