import * as React from "react";
import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
} from "@draftbit/types";
import { Callout, MapEvent } from "react-native-maps";
import { InfoWindow } from "@react-google-maps/api";
import { markerContext } from "./MapMarker";
import { Platform, TouchableOpacity } from "react-native";

export interface CalloutProps {
  onPress?: (event?: MapEvent<{ action: "callout-press" }>) => void;
  showTooltip?: boolean;
}

const MapCallout: React.FC<CalloutProps> = ({
  onPress,
  showTooltip,
  children,
}) => (
  <Callout tooltip={showTooltip} onPress={onPress}>
    {children}
  </Callout>
);

const BrowserCallout: React.FC<CalloutProps> = ({
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

export default Platform.select({
  native: MapCallout,
  default: BrowserCallout,
});

export const SEED_DATA = {
  name: "Map View",
  tag: "MapView",
  description: "A map view",
  category: COMPONENT_TYPES.container,
  layout: {},
  props: {
    onPress: createActionProp({
      description: "Action to execute when the callout is pressed",
    }),
    showTooltip: createBoolProp({
      label: "Show Tooltip",
      description:
        'If false, a default "tooltip" bubble window will be drawn around this callouts children. If true, the child views can fully customize their appearance, including any "bubble" like styles',
      defaultValue: false,
    }),
  },
};
