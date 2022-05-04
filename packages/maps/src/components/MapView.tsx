import * as React from "react";
import * as Location from "expo-location";
import Svg, { Ellipse } from "react-native-svg";
import NativeMapView, { Marker } from "./ReactNativeMaps";
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

type State = {
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

class MapView extends React.Component<MapViewProps, State> {
  private mapRef: React.RefObject<any>;
  constructor(props: MapViewProps) {
    super(props);
    this.state = {};
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    (async () => {
      if (!this.props.showUserLocation) {
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      this.setState({ userLocation: coords });
    })();
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
    const args: {
      center: { latitude: number; longitude: number };
      altitude?: number;
      zoom?: number;
    } = {
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
      moveMapToUser,
      style,
      children,
    } = this.props;

    const { userLocation } = this.state;

    if (!NativeMapView || !Marker) {
      return null;
    }

    const camera = {
      altitude: zoomToAltitude(zoom || 1),
      heading: 0,
      pitch: 0,
      zoom,
      center:
        userLocation && moveMapToUser
          ? {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }
          : {
              latitude,
              longitude,
            },
    };

    return (
      <NativeMapView
        ref={this.mapRef}
        provider={provider}
        mapType={mapType}
        showsCompass={showsCompass}
        rotateEnabled={rotateEnabled}
        zoomEnabled={zoomEnabled}
        camera={camera}
        loadingEnabled={loadingEnabled}
        scrollEnabled={scrollEnabled}
        loadingBackgroundColor={loadingBackgroundColor}
        loadingIndicatorColor={loadingIndicatorColor}
        style={style}
      >
        {userLocation ? (
          <Marker
            title="Your Location"
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
          >
            <Svg height={40} width={40}>
              <Ellipse
                cx="20"
                cy="20"
                rx="8"
                ry="8"
                fill="#387af4"
                stroke="#fff"
                strokeWidth="2"
              />
            </Svg>
          </Marker>
        ) : null}
        {children}
      </NativeMapView>
    );
  }
}

export default MapView;
