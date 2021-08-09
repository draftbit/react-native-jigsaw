import * as React from "react";
import { TouchableOpacity } from "react-native";
import { InfoWindow } from "@react-google-maps/api";
import { markerContext } from "./MapMarker";
import { CalloutProps } from "./types";

const MapCallout: React.FC<CalloutProps> = ({
  anchor,
  onPress = () => {},
  children,
}) => {
  const { toggleCallout, position, calloutOpened } =
    React.useContext(markerContext);
  const handleClose = () => toggleCallout(false);
  const handlePress = () => onPress();
  return calloutOpened ? (
    <TouchableOpacity onPress={handlePress}>
      <InfoWindow
        anchor={anchor}
        position={{
          lat: position?.latitude,
          lng: position?.longitude,
        }}
        onCloseClick={handleClose}
      >
        {children}
      </InfoWindow>
    </TouchableOpacity>
  ) : null;
};

export default MapCallout;
