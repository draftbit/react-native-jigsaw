import * as React from "react";
import { TouchableOpacity } from "react-native";
import { InfoWindow } from "@react-google-maps/api";
import { markerContext } from "./MapMarker";
import { MapCalloutProps } from "@draftbit/types";

const MapCallout: React.FC<MapCalloutProps> = ({
  anchor,
  onPress = () => {},
  children,
}) => {
  const { toggleCallout, position, calloutOpened } =
    React.useContext(markerContext);
  const handleClose = () => toggleCallout(false);
  return calloutOpened ? (
    <TouchableOpacity onPress={onPress}>
      <InfoWindow
        anchor={anchor}
        position={{
          lat: position?.latitude || 0,
          lng: position?.longitude || 0,
        }}
        onCloseClick={handleClose}
      >
        {children}
      </InfoWindow>
    </TouchableOpacity>
  ) : null;
};

export default MapCallout;
