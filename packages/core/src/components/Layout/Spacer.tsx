import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";

interface SpacerProps {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  style?: StyleProp<ViewStyle>;
}

const Spacer: React.FC<SpacerProps> = ({
  top = 8,
  right = 8,
  bottom = 8,
  left = 8,
  style,
}) => {
  return (
    <View
      style={[
        style,
        {
          paddingRight: right,
          paddingTop: top,
          paddingLeft: left,
          paddingBottom: bottom,
        },
      ]}
    />
  );
};

export default Spacer;
