import * as React from "react";
import { StyleSheet } from "react-native";
import MapViewComponent from "./ReactNativeMaps";
import type {
  Camera,
  LatLng,
  Region,
  MapViewProps as MapViewComponentProps,
} from "react-native-maps";

export interface MapViewProps<T> extends MapViewComponentProps {
  apiKey: string;
  zoom?: number;
  latitude?: number;
  longitude?: number;
  markersData?: T[];
  keyExtractor: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  onRegionChange?: (region: Region) => void;
}

class MapView<T> extends React.Component<
  React.PropsWithChildren<MapViewProps<T>>
> {
  private mapRef: React.RefObject<any>;
  constructor(props: React.PropsWithChildren<MapViewProps<T>>) {
    super(props);
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

  animateToLocation({
    latitude,
    longitude,
    zoom,
  }: LatLng & {
    zoom?: number;
  }) {
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

  render() {
    const {
      apiKey,
      latitude,
      longitude,
      zoom,
      showsCompass = false,
      loadingEnabled = true,
      markersData,
      renderItem,
      keyExtractor,
      onRegionChange,
      style,
      children,
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

    return (
      <MapViewComponent
        //@ts-ignore Ref type is lost due to how web/native import is done
        ref={this.mapRef}
        googleMapsApiKey={apiKey}
        showsCompass={showsCompass}
        camera={camera}
        loadingEnabled={loadingEnabled}
        onRegionChangeComplete={(region) => {
          onRegionChange?.(region);
        }}
        style={[styles.map, style]}
        {...rest}
      >
        {markersData && renderItem
          ? markersData.map((item, index) => {
              const component = renderItem({ item, index });

              if (!component) {
                return null;
              }

              const key = keyExtractor ? keyExtractor(item, index) : index;
              return React.cloneElement(component, {
                key,
              });
            })
          : children}
      </MapViewComponent>
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

export default MapView;
