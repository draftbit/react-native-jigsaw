import * as React from "react";
import { StyleSheet, Platform } from "react-native";
import MapViewComponent from "./react-native-maps";
import type {
  Camera,
  Region,
  MapViewProps as MapViewComponentProps,
} from "react-native-maps";
import MapMarker, { MapMarkerProps, renderMarker } from "./MapMarker";
import MapMarkerCluster from "./marker-cluster/MapMarkerCluster";
import { MapViewContext, ZoomLocation } from "./MapViewCommon";
import { MapMarkerClusterView } from "./marker-cluster";
import { flattenReactFragments } from "@draftbit/ui";

export interface MapViewProps<T>
  extends Omit<MapViewComponentProps, "onRegionChangeComplete"> {
  apiKey: string;
  zoom?: number;
  latitude?: number;
  longitude?: number;
  autoClusterMarkers?: boolean;
  autoClusterMarkersDistanceMeters?: number;
  markersData?: T[];
  keyExtractor?: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  onRegionChange?: (region: Region) => void;
}

interface MapViewState {
  region: Region | null;
}

class MapView<T> extends React.Component<
  React.PropsWithChildren<MapViewProps<T>>,
  MapViewState
> {
  private mapRef: React.RefObject<any>;
  constructor(props: React.PropsWithChildren<MapViewProps<T>>) {
    super(props);
    this.state = { region: null };
    this.mapRef = React.createRef();
  }

  componentDidUpdate(prevProps: React.PropsWithChildren<MapViewProps<T>>) {
    if (
      prevProps.latitude != null &&
      prevProps.longitude != null &&
      this.props.latitude != null &&
      this.props.longitude != null &&
      (prevProps.latitude !== this.props.latitude ||
        prevProps.longitude !== this.props.longitude)
    ) {
      this.animateToLocation({
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        zoom: this.props.zoom,
      });
    }
  }

  animateToLocation({ latitude, longitude, zoom }: ZoomLocation) {
    const camera: Camera = {
      heading: 0,
      pitch: 0,
      center: {
        latitude,
        longitude,
      },
    };

    if (zoom) {
      camera.altitude = zoomToAltitude(zoom || 1);
      camera.zoom = zoom;
    }

    this.mapRef.current.animateCamera(camera);
  }

  private getChildrenForType(type: React.ElementType): React.ReactElement[] {
    const { markersData, renderItem, keyExtractor, children } = this.props;

    if (Array.isArray(markersData) && renderItem) {
      const markers: React.ReactElement[] = [];

      markersData.forEach((item, index) => {
        const component = renderItem?.({ item, index });
        const flattened = flattenReactFragments([component]);

        flattened.forEach((child) => {
          if (child && child.type === type) {
            const key = keyExtractor ? keyExtractor(item, index) : index;
            markers.push(
              React.cloneElement(child, {
                key,
              })
            );
          }
        });
      });
      return markers;
    } else {
      return flattenReactFragments(
        React.Children.toArray(children) as React.ReactElement[]
      ).filter((child) => child.type === type);
    }
  }

  private clusterMarkers(
    markers: React.ReactElement[],
    clusters: React.ReactElement[],
    distanceMeters: number,
    clusterView?: React.ReactElement
  ) {
    for (const marker of markers) {
      const { latitude, longitude } = marker.props as MapMarkerProps;

      const nearbyMarkers = this.getNearbyMarkers(
        latitude,
        longitude,
        markers,
        distanceMeters
      );

      if (nearbyMarkers.length > 1) {
        for (const nearbyMarker of nearbyMarkers) {
          markers.splice(markers.indexOf(nearbyMarker), 1);
        }
        clusters.push(
          <MapMarkerCluster>
            {clusterView}
            {nearbyMarkers}
          </MapMarkerCluster>
        );
      }
    }
  }

  private getNearbyMarkers(
    lat: number,
    long: number,
    markers: React.ReactElement[],
    distanceMeters: number
  ): React.ReactElement[] {
    const nearbyMarkers: React.ReactElement[] = [];

    for (const marker of markers) {
      const { latitude: lat2, longitude: long2 } =
        marker.props as MapMarkerProps;

      const distance = calculateDistanceBetween2PointsMeters(
        lat,
        long,
        lat2,
        long2
      );

      if (distance <= distanceMeters) {
        nearbyMarkers.push(marker);
      }
    }

    return nearbyMarkers;
  }

  render() {
    const {
      apiKey,
      provider = Platform.OS === "web" ? "google" : undefined,
      latitude,
      longitude,
      zoom,
      showsCompass = false,
      loadingEnabled = true,
      autoClusterMarkers = false,
      autoClusterMarkersDistanceMeters = 1000,
      onRegionChange,
      style,
      ...rest
    } = this.props;

    const camera: Camera = {
      altitude: zoomToAltitude(zoom || 1),
      heading: 0,
      pitch: 0,
      zoom,
      center: {
        latitude: latitude || 0,
        longitude: longitude || 0,
      },
    };

    const markers = this.getChildrenForType(MapMarker);
    const clusters = this.getChildrenForType(MapMarkerCluster);
    const clusterView = this.getChildrenForType(MapMarkerClusterView).at(0); //Only take the first, ignore any others

    if (autoClusterMarkers) {
      this.clusterMarkers(
        markers,
        clusters,
        autoClusterMarkersDistanceMeters,
        clusterView
      );
    }

    return (
      <MapViewContext.Provider
        value={{
          animateToLocation: (location) => this.animateToLocation(location),
          region: this.state.region,
        }}
      >
        <MapViewComponent
          ref={this.mapRef}
          onMapReady={() =>
            // This initial animateToLocation ensures that 'region' state is initially set
            this.animateToLocation({
              latitude: camera.center.latitude,
              longitude: camera.center.longitude,
              zoom: camera.zoom,
            })
          }
          provider={provider}
          googleMapsApiKey={apiKey}
          showsCompass={showsCompass}
          initialCamera={camera}
          loadingEnabled={loadingEnabled}
          onRegionChangeComplete={(region) => {
            onRegionChange?.(region);
          }}
          onRegionChange={(region) => this.setState({ region })}
          style={[styles.map, style]}
          {...rest}
        >
          {markers.map((marker, index) => renderMarker(marker.props, index))}

          {clusters.map((cluster, index) => (
            <React.Fragment key={index}>{cluster}</React.Fragment>
          ))}
        </MapViewComponent>
      </MapViewContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

// Approximates a conversion of zoom level to altitude,
// since different platforms require different values.
// https://stackoverflow.com/a/37142662
function zoomToAltitude(zoom: number) {
  const A = 40487.57;
  const B = 0.00007096758;
  const C = 91610.74;
  const D = -40467.74;

  return C * Math.pow((A - D) / (zoom - D) - 1, 1 / B);
}

// Uses Haversie formula (https://en.wikipedia.org/wiki/Haversine_formula) to calculate distance between 2 coordinates on earth
// https://stackoverflow.com/a/27943
function calculateDistanceBetween2PointsMeters(
  lat1: number,
  long1: number,
  lat2: number,
  long2: number
) {
  var earthRadiusKM = 6371;
  var deltaLat = degreeToRadian(lat2 - lat1);
  var deltaLong = degreeToRadian(long2 - long1);
  var a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(degreeToRadian(lat1)) *
      Math.cos(degreeToRadian(lat2)) *
      Math.sin(deltaLong / 2) *
      Math.sin(deltaLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distanceKM = earthRadiusKM * c;
  return distanceKM * 1000;
}

function degreeToRadian(deg: number) {
  return deg * (Math.PI / 180);
}

export default MapView;
