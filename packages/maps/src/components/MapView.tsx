import * as React from "react";
import NativeMapView from "./ReactNativeMaps";
import { MapViewProps } from "@draftbit/types";

// Dynamically import from ./ReactNativeMaps so that we don't
// require react-native-maps unless we're in native.

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

class MapView extends React.Component<MapViewProps> {
  private mapRef: React.RefObject<any>;
  constructor(props: MapViewProps) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidUpdate(prevProps: MapViewProps) {
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
  }: {
    latitude: number;
    longitude: number;
    zoom?: number;
  }) {
    const args: { [key: string]: number | object } = {
      center: {
        latitude,
        longitude,
      },
    };

    if (zoom) {
      args.altitude = zoomToAltitude(zoom || 1);
      args.zoom = zoom;
    }

    this.mapRef.current.animateCamera(args);
  }

  render() {
    const {
      provider,
      latitude,
      longitude,
      zoom,
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
    } = this.props;

    if (!NativeMapView) {
      return null;
    }

    return (
      <NativeMapView
        ref={this.mapRef}
        provider={provider}
        mapType={mapType}
        showsCompass={showsCompass}
        rotateEnabled={rotateEnabled}
        zoomEnabled={zoomEnabled}
        initialCamera={{
          altitude: zoomToAltitude(zoom || 1),
          heading: 0,
          pitch: 0,
          zoom,
          center: {
            latitude,
            longitude,
          },
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
  }
}

export default MapView;
