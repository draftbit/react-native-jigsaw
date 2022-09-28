import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MapMarkerProps } from "@draftbit/types";
import { Marker as WebMarker } from "./ReactGoogleMaps";
import MapCallout from "./MapCallout";

interface LatLng {
  latitude: number;
  longitude: number;
}

interface IMarkerContext {
  pinColor?: string | undefined;
  calloutOpened: boolean;
  position: LatLng | undefined;
  toggleCallout: (value: boolean) => void;
}

export const markerContext = React.createContext<IMarkerContext>({
  pinColor: "#E74C3C",
  calloutOpened: false,
  position: undefined,
  toggleCallout: () => {},
});

const MapMarker: React.FC<React.PropsWithChildren<MapMarkerProps>> = ({
  pinColor,
  latitude,
  longitude,
  title,
  description,
  children,
}) => {
  const { Provider } = markerContext;
  const [calloutOpened, toggleCallout] = React.useState(false);
  const [marker, setMarker] = React.useState<typeof WebMarker | null>(null);
  const handleMarkerClick = () => toggleCallout(true);
  const handleOnLoad = (m: any) => setMarker(m);

  if (!WebMarker) {
    return null;
  }

  let mappedChildren;
  if (!children) {
    if (title || description) {
      mappedChildren = (
        <MapCallout showTooltip anchor={marker}>
          <View style={style.tooltip}>
            {title && <Text style={style.title}>{title}</Text>}
            {description && (
              <Text style={style.description}>{description}</Text>
            )}
          </View>
        </MapCallout>
      );
    }
  } else {
    mappedChildren = React.Children.map(children, (child, index) => {
      return React.cloneElement(child as React.ReactElement, {
        index,
        anchor: marker,
      });
    });
  }

  return (
    <Provider
      value={{
        pinColor: pinColor,
        calloutOpened,
        toggleCallout: (value) => toggleCallout(value),
        position: {
          latitude,
          longitude,
        },
      }}
    >
      <WebMarker
        position={{
          lat: latitude,
          lng: longitude,
        }}
        onClick={handleMarkerClick}
        onLoad={handleOnLoad}
      >
        {mappedChildren}
      </WebMarker>
    </Provider>
  );
};

const style = StyleSheet.create({
  tooltip: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
});

export default MapMarker;
