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

const MapMarker: React.FC<MapMarkerProps> = ({
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
        icon={{
          path: "m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z",
          fillColor: pinColor,
          fillOpacity: 1,
          strokeWeight: 0,
          rotation: 0,
          scale: 2,
        }}
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
