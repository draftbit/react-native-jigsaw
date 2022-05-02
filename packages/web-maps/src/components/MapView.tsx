import * as React from "react";
import { GoogleMap, LoadScript } from "./ReactGoogleMaps";
import NoApiKey from "./NoApiKey";
import { MapViewProps } from "@draftbit/types";
import { StyleSheet } from "react-native";

type State = {
  lat: number;
  lng: number;
  zoom?: number;
};

class MapView extends React.Component<MapViewProps, State> {
  constructor(props: MapViewProps) {
    super(props);
    this.state = {
      lat: props.latitude || 0,
      lng: props.longitude || 0,
      zoom: props.zoom,
    };
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
      this.setState({
        lat: this.props.latitude,
        lng: this.props.longitude,
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
    const args: { lat: number; lng: number; zoom?: number } = {
      lat: latitude,
      lng: longitude,
    };

    if (zoom) {
      args.zoom = zoom;
    }

    this.setState(args);
  }

  render() {
    const {
      apiKey,
      rotateEnabled = true,
      scrollEnabled = true,
      mapType = "standard",
      style,
      children,
    } = this.props;

    const { lat, lng, zoom } = this.state;

    if (!LoadScript || !GoogleMap) {
      return null;
    }

    if (!apiKey) {
      return <NoApiKey />;
    }

    return (
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={StyleSheet.flatten(style) as React.CSSProperties}
          center={{
            lat,
            lng,
          }}
          mapTypeId={mapType}
          zoom={zoom}
          options={{
            scrollwheel: scrollEnabled,
            rotateControl: rotateEnabled,
          }}
        >
          {children}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MapView;
