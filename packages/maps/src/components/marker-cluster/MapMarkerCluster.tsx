import React from "react";
import { MarkerClusterer } from "@teovilla/react-native-web-maps";
import MapMarker, { renderMarker } from "../MapMarker";
import MapMarkerClusterView, {
  DefaultMapMarkerClusterView,
} from "./MapMarkerClusterView";
import { MapMarkerClusterContext } from "./MapMarkerClusterContext";
import { MapViewContext } from "../MapViewCommon";
import { flattenReactFragments } from "@draftbit/core";
import { MapMarkerContext } from "../MapView";

/**
 * Component that clusters all markers provided in as children to a single point when zoomed out, and shows the markers themselves when zoomed in
 * Renders a default component that shows the number of components inside cluster
 *
 * Also accepts MapMarkerClusterView to override the rendered cluster component
 */
const MapMarkerCluster: React.FC<React.PropsWithChildren> = ({
  children: childrenProp,
}) => {
  const { region, animateToLocation } = React.useContext(MapViewContext);

  const children = React.useMemo(
    () =>
      flattenReactFragments(
        React.Children.toArray(childrenProp) as React.ReactElement[]
      ),
    [childrenProp]
  );

  const markers = React.useMemo(
    () => children.filter((child) => child.type === MapMarker),
    [children]
  );

  const clusterView = React.useMemo(
    () =>
      children.find((child) => child.type === MapMarkerClusterView) || (
        <DefaultMapMarkerClusterView />
      ),
    [children]
  );

  return (
    <MapMarkerContext.Consumer>
      {({ getMarkerRef, onMarkerPress }) => (
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
                {renderMarker(
                  {
                    latitude,
                    longitude,
                    children: clusterView,
                    onPress,
                    tracksViewChanges:
                      clusterView.type === DefaultMapMarkerClusterView
                        ? false
                        : clusterView.props.tracksViewChanges,
                  },
                  `${latitude}-${longitude}-${pointCount}`
                )}
              </MapMarkerClusterContext.Provider>
            );
          }}
        >
          {markers.map((marker, index) =>
            renderMarker(marker.props, index, getMarkerRef(marker.props), () =>
              onMarkerPress(marker.props)
            )
          )}
        </MarkerClusterer>
      )}
    </MapMarkerContext.Consumer>
  );
};

export default MapMarkerCluster;
