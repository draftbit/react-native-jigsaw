import * as React from "react";
import { LatLng } from "react-native-maps";
import { MapMarkerProps } from "./types";
import { Marker as WebMarker } from "@react-google-maps/api";
interface IMarkerContext {
  calloutOpened: boolean;
  position: LatLng | undefined;
  toggleCallout: (value: boolean) => void;
}

export const markerContext = React.createContext<IMarkerContext>({
  calloutOpened: false,
  position: undefined,
  toggleCallout: () => {},
});

const MapMarker: React.FC<MapMarkerProps> = ({
  latitude,
  longitude,
  title,
  description,
  children,
}) => {
  const { Provider } = markerContext;
  const [calloutOpened, toggleCallout] = React.useState(false);
  const handleMarkerClick = () => toggleCallout(true);
  return (
    <Provider
      value={{
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
        title={description}
        label={title}
        onClick={handleMarkerClick}
      >
        {children}
      </WebMarker>
    </Provider>
  );
};

export default MapMarker;
