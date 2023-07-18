import React from "react";
import { View, ViewProps } from "react-native";

interface AspectRatioProps extends ViewProps {
  aspectRatio?: number;
}

const AspectRatio: React.FC<AspectRatioProps> = ({
  aspectRatio = 1,
  style,
  ...rest
}) => {
  return <View {...rest} style={[{ aspectRatio }, style]} />;
};

export default AspectRatio;
