import React from "react";
import { View, ViewProps, StyleProp, ViewStyle } from "react-native";

interface SpacerProps extends Omit<ViewProps, "style"> {
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
  ...rest
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
      {...rest}
    />
  );
};

export default Spacer;
