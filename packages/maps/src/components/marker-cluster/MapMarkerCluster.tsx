import React from "react";
import { MarkerClusterer } from "@teovilla/react-native-web-maps";
import MapMarker, { renderMarker } from "../MapMarker";
import MapMarkerClusterView, {
  DefaultMapMarkerClusterView,
} from "./MapMarkerClusterView";
import { MapMarkerClusterContext } from "./MapMarkerClusterContext";
import { MapViewContext } from "../MapViewCommon";

/**
 * Component that clusters all markers provided in as children to a single point when zoomed out, and shows the markers themselves when zoomed in
 * Renders a default component that shows the number of components inside cluster
 *
 * Also accepts MapMarkerClusterView to override the rendered cluster component
 */
const MapMarkerCluster: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { region, animateToLocation } = React.useContext(MapViewContext);

  const markers = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) => (child as React.ReactElement).type === MapMarker
      ) as React.ReactElement[],
    [children]
  );

  const clusterView = React.useMemo(
    () =>
      (React.Children.toArray(children).find(
        (child) => (child as React.ReactElement).type === MapMarkerClusterView
      ) || <DefaultMapMarkerClusterView />) as React.ReactElement,
    [children]
  );

  return (
    <MarkerClusterer
      region={region}
      renderCluster={({ pointCount, coordinate, expansionZoom }) => {
        const { latitude, longitude } = coordinate;

        // onPress needs to be lifted out and passed to Marker directly because Marker intercepts all touch events
        const clusterViewOnPress = clusterView.props?.onPress;
        const zoomOnPress = clusterView.props?.zoomOnPress ?? true;

        const onPress = () => {
          clusterViewOnPress?.(latitude, longitude);
          if (zoomOnPress) {
            animateToLocation({
              latitude,
              longitude,
              zoom: expansionZoom + 3,
            });
          }
        };

        return (
          <MapMarkerClusterContext.Provider
            value={{
              markerCount: pointCount,
            }}
          >
            {renderMarker({
              latitude,
              longitude,
              children: clusterView,
              onPress,
            })}
          </MapMarkerClusterContext.Provider>
        );
      }}
    >
      {markers.map((marker, index) => renderMarker(marker.props, index))}
    </MarkerClusterer>
  );
};

export default MapMarkerCluster;
