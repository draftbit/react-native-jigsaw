import * as React from "react";
import { LatLng, MarkerProps } from "react-native-maps";
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
  const [marker, setMarker] = React.useState<MarkerProps | null>(null);
  const handleMarkerClick = () => toggleCallout(true);
  const handleOnLoad = (m: MarkerProps) => setMarker(m);
  const mappedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as React.ReactElement, {
      index,
      anchor: marker,
    });
  });
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
        onLoad={handleOnLoad}
      >
        {mappedChildren}
      </WebMarker>
    </Provider>
  );
};

export default MapMarker;
