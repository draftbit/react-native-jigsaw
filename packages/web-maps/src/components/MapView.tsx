import * as React from "react";
import { GoogleMap, Marker, LoadScript } from "./ReactGoogleMaps";
import NoApiKey from "./NoApiKey";
import { MapViewProps } from "@draftbit/types";
import { StyleSheet } from "react-native";

type State = {
  lat: number;
  lng: number;
  zoom?: number;
  userLocation?: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
};

class MapView extends React.Component<
  React.PropsWithChildren<MapViewProps<any>>,
  State
> {
  constructor(props: React.PropsWithChildren<MapViewProps<any>>) {
    super(props);
    this.state = {
      lat: props.latitude || 0,
      lng: props.longitude || 0,
      zoom: props.zoom,
    };
  }

  componentDidMount() {
    (async () => {
      if (!this.props.showsUserLocation) {
        return;
      }

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;

          this.setState({ userLocation: coords });

          if (this.props.followsUserLocation) {
            this.setState({ lat: coords.latitude, lng: coords.longitude });
          }
        });
      }
    })();
  }

  componentDidUpdate(prevProps: React.PropsWithChildren<MapViewProps<any>>) {
    if (
      prevProps.latitude != null &&
      prevProps.longitude != null &&
      this.props.latitude != null &&
      this.props.longitude != null &&
      (prevProps.latitude !== this.props.latitude ||
        prevProps.longitude !== this.props.longitude)
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
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
      markersData,
      renderItem,
      keyExtractor,
      children,
    } = this.props;

    const { lat, lng, userLocation, zoom } = this.state;

    if (!LoadScript || !GoogleMap || !Marker) {
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
          {userLocation ? (
            <Marker
              title="Your Location"
              position={{
                lat: userLocation.latitude,
                lng: userLocation.longitude,
              }}
              icon={{
                path: "M12,20a8,8 0 1,0 16,0a8,8 0 1,0 -16,0",
                fillColor: "#387af4",
                fillOpacity: 1,
                strokeColor: "#fff",
                strokeWidth: 4,
                strokeOpacity: 1,
              }}
            />
          ) : null}
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
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MapView;
