import * as React from "react";
import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
} from "@draftbit/types";
import { Callout, MapEvent } from "react-native-maps";

export interface CalloutProps {
  onPress?: (event: MapEvent<{ action: "callout-press" }>) => void;
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

export default MapCallout;

export const SEED_DATA = {
  name: "Map View",
  tag: "MapView",
  description: "A map view",
  category: COMPONENT_TYPES.blocks,
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
