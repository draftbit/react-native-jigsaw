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
import { flattenReactFragments } from "@draftbit/core";
import type { MapMarker as MapMarkerRefType } from "react-native-maps";
import { useDeepCompareMemo, useDebounce } from "../utils";
import MapCircle from "./MapCircle";

export interface MapMarkerContextType {
  onMarkerPress: (marker: MapMarkerProps) => void;
  getMarkerRef: (
    marker: MapMarkerProps
  ) => React.Ref<MapMarkerRefType> | undefined;
}

export const MapMarkerContext = React.createContext<MapMarkerContextType>({
  onMarkerPress: () => {},
  getMarkerRef: () => undefined,
});

interface RegionWithZoom extends Region {
  zoom: number;
}

export interface MapViewProps<T>
  extends Omit<
    MapViewComponentProps,
    "onRegionChangeComplete" | "onPress" | "onRegionChange"
  > {
  apiKey: string;
  zoom?: number;
  latitude?: number;
  longitude?: number;
  autoClusterMarkers?: boolean;
  autoClusterMarkersDistanceMeters?: number;
  markersData?: T[];
  keyExtractor?: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  onRegionChange?: (region: RegionWithZoom) => void;
  onPress?: (latitude: number, longitude: number) => void;
}

const MapViewF = <T extends object>({
  apiKey,
  provider = Platform.OS === "web" ? "google" : undefined,
  latitude,
  longitude,
  zoom,
  showsCompass = false,
  loadingEnabled = true,
  autoClusterMarkers = false,
  autoClusterMarkersDistanceMeters = 1000,
  markersData,
  keyExtractor,
  renderItem,
  children,
  onRegionChange,
  onPress,
  style,
  animateToLocation,
  mapRef,
  mapType: mapTypeProp = "standard",
  ...rest
}: MapViewProps<T> & {
  animateToLocation: (location: ZoomLocation) => void;
  mapRef: React.RefObject<MapViewComponent>;
}) => {
  const [currentRegion, setCurrentRegion] = React.useState<Region | null>(null);
  const delayedRegionValue = useDebounce(currentRegion, 300);
  const contextDelayedRegionValue = useDebounce(currentRegion, 50);

  let mapType = mapTypeProp;
  if (mapType === "mutedStandard" && Platform.OS === "android") {
    console.warn(
      "Map type 'mutedStandard' is not supported on Android. Defaulting to 'standard'"
    );
    mapType = "standard";
  }

  const markerRefs = React.useMemo<
    Map<string, React.RefObject<MapMarkerRefType>>
  >(() => new Map(), []);

  const camera: Camera = React.useMemo(
    () => ({
      altitude: zoomToAltitude(zoom || 1),
      heading: 0,
      pitch: 0,
      zoom,
      center: {
        latitude: latitude || 0,
        longitude: longitude || 0,
      },
    }),
    [latitude, longitude, zoom]
  );

  const getChildrenForType = React.useCallback(
    (type: React.ElementType): React.ReactElement[] => {
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
    },
    [markersData, renderItem, keyExtractor, children]
  );

  // Dismiss all other callouts except the one just pressed. Maintains that only one is opened at a time
  // Web specfic, this is the default on native
  const dismissAllOtherCallouts = React.useCallback(
    (markerIdentifier: string) => {
      if (Platform.OS === "web") {
        for (const [idenfitifer, markerRef] of markerRefs) {
          if (idenfitifer !== markerIdentifier)
            markerRef.current?.hideCallout();
        }
      }
    },
    [markerRefs]
  );

  const getMarkerRef = React.useCallback(
    (markerIdentifier: string) => {
      if (markerRefs.has(markerIdentifier)) {
        return markerRefs.get(markerIdentifier);
      } else {
        const ref = React.createRef<MapMarkerRefType>();
        markerRefs.set(markerIdentifier, ref);
        return ref;
      }
    },
    [markerRefs]
  );

  const getNearbyMarkers = React.useCallback(
    (
      lat: number,
      long: number,
      markers: React.ReactElement[],
      distanceMeters: number
    ): React.ReactElement[] => {
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
    },
    []
  );

  const clusterMarkers = React.useCallback(
    (
      markers: React.ReactElement[],
      distanceMeters: number,
      clusterView?: React.ReactElement
    ) => {
      const clusters = [];
      const clusteredMarkers: React.ReactElement[] = [];

      for (const marker of markers) {
        const { latitude: lat, longitude: long } =
          marker.props as MapMarkerProps;

        if (clusteredMarkers.includes(marker)) {
          continue;
        }

        const nearbyMarkers = getNearbyMarkers(
          lat,
          long,
          markers,
          distanceMeters
        );

        if (nearbyMarkers.length > 1) {
          for (const nearbyMarker of nearbyMarkers) {
            clusteredMarkers.push(nearbyMarker);
          }
          clusters.push(
            <MapMarkerCluster>
              {clusterView}
              {nearbyMarkers}
            </MapMarkerCluster>
          );
        }
      }

      const unClusteredMarkers = markers.filter(
        (marker) => !clusteredMarkers.includes(marker)
      );

      return { clusters, unClusteredMarkers };
    },
    [getNearbyMarkers]
  );

  React.useEffect(() => {
    if (latitude && longitude) {
      animateToLocation({
        latitude,
        longitude,
        zoom,
      });
    }
  }, [latitude, longitude, zoom, animateToLocation]);

  // Use delayed/debounced value to prevent too many calls when map is being dragged
  React.useEffect(() => {
    const callOnRegionChange = async () => {
      if (delayedRegionValue) {
        const camera = await mapRef.current?.getCamera();
        onRegionChange?.({ ...delayedRegionValue, zoom: camera?.zoom ?? 1 });
      }
    };

    callOnRegionChange();
    // onRegionChange excluded to prevent calling on every rerender when using an anonymous function (which is most common)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayedRegionValue]);

  const circles = React.useMemo(
    () => getChildrenForType(MapCircle),
    [getChildrenForType]
  );

  const markers = React.useMemo(
    () => getChildrenForType(MapMarker),
    [getChildrenForType]
  );

  const manualClusters = React.useMemo(
    () => getChildrenForType(MapMarkerCluster),
    [getChildrenForType]
  );

  const clusterView = React.useMemo(() => {
    const clusterViews = getChildrenForType(MapMarkerClusterView);
    return clusterViews.length ? clusterViews[0] : undefined; //Only take the first, ignore any others
  }, [getChildrenForType]);

  const { clusters, unClusteredMarkers } = React.useMemo(() => {
    if (autoClusterMarkers) {
      const { clusters, unClusteredMarkers } = clusterMarkers(
        markers,
        autoClusterMarkersDistanceMeters,
        clusterView
      );

      return { clusters: clusters.concat(manualClusters), unClusteredMarkers };
    } else {
      return { clusters: manualClusters, unClusteredMarkers: markers };
    }
  }, [
    autoClusterMarkers,
    autoClusterMarkersDistanceMeters,
    markers,
    manualClusters,
    clusterView,
    clusterMarkers,
  ]);

  const memoizedMapView = useDeepCompareMemo(
    () => (
      <MapViewComponent
        ref={mapRef}
        onMapReady={() => {
          // This initial animateToLocation ensures that 'region' state is initially set
          animateToLocation({
            latitude: latitude || 0,
            longitude: longitude || 0,
            zoom,
          });
        }}
        provider={provider}
        googleMapsApiKey={apiKey}
        showsCompass={showsCompass}
        initialCamera={camera}
        loadingEnabled={loadingEnabled}
        onRegionChange={setCurrentRegion}
        onPress={(event) => {
          const coordinate = event.nativeEvent.coordinate;
          onPress?.(coordinate.latitude, coordinate.longitude);
        }}
        style={[styles.map, style]}
        mapType={mapType}
        {...rest}
      >
        {unClusteredMarkers.map((marker, index) =>
          renderMarker(
            marker.props,
            index,
            getMarkerRef(getMarkerIdentifier(marker.props)),
            () => dismissAllOtherCallouts(getMarkerIdentifier(marker.props))
          )
        )}

        {/* 
            Markers within clusters also need to able to assign refs and propogate press.
            This is done through context to prevent exposing these internal config options as props of the cluster component
          */}
        <MapMarkerContext.Provider
          value={{
            getMarkerRef: (marker) => getMarkerRef(getMarkerIdentifier(marker)),
            onMarkerPress: (marker) =>
              dismissAllOtherCallouts(getMarkerIdentifier(marker)),
          }}
        >
          {clusters.map((cluster, index) => (
            <React.Fragment key={index}>{cluster}</React.Fragment>
          ))}
        </MapMarkerContext.Provider>

        {circles}
      </MapViewComponent>
    ),
    [
      animateToLocation,
      apiKey,
      camera,
      clusters,
      dismissAllOtherCallouts,
      getMarkerRef,
      latitude,
      loadingEnabled,
      longitude,
      mapRef,
      unClusteredMarkers,
      onPress,
      onRegionChange,
      provider,
      rest,
      setCurrentRegion,
      showsCompass,
      style,
      zoom,
    ]
  );

  return (
    <MapViewContext.Provider
      value={{
        animateToLocation: (location) => animateToLocation(location),
        region: contextDelayedRegionValue,
      }}
    >
      {memoizedMapView}
    </MapViewContext.Provider>
  );
};

class MapView<T extends object> extends React.Component<
  React.PropsWithChildren<MapViewProps<T>>
> {
  private mapRef: React.RefObject<any> = React.createRef();

  animateToLocation = ({ latitude, longitude, zoom }: ZoomLocation) => {
    const camera: Camera = {
      heading: 0,
      pitch: 0,
      center: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
    };

    if (zoom) {
      camera.altitude = zoomToAltitude(zoom || 1);
      camera.zoom = zoom;
    }

    this.mapRef?.current?.animateCamera(camera);
  };

  render() {
    return (
      <MapViewF
        {...this.props}
        animateToLocation={this.animateToLocation}
        mapRef={this.mapRef}
      />
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

function getMarkerIdentifier(marker: MapMarkerProps) {
  return `marker-${marker.latitude}-${marker.longitude}`;
}

export default MapView;
