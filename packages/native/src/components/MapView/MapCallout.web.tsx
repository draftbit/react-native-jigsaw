import * as React from "react";
import { TouchableOpacity } from "react-native";
import { InfoWindow } from "@react-google-maps/api";
import { markerContext } from "./MapMarker.web";
import { CalloutProps } from "./types";

const MapCallout: React.FC<CalloutProps> = ({
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
