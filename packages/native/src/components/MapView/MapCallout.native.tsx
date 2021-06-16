import * as React from "react";
import { Callout } from "react-native-maps";
import { CalloutProps } from "./types";
import {
  COMPONENT_TYPES,
  createActionProp,
  createBoolProp,
} from "@draftbit/types";

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
  name: "Callout",
  tag: "MapCallout",
  description:
    "An info window to display on top of a marker when it is clicked",
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
