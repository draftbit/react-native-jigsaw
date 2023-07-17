import React from "react";
import { View, ViewProps } from "react-native";

interface AspectRatioProps extends ViewProps {
  aspectRatio?: number;
}

//TODO: Fix aspect ration when only height is provided
const AspectRatio: React.FC<AspectRatioProps> = ({
  aspectRatio = 1,
  style,
  onLayout,
  ...rest
}) => {
  const [calculatedWidth, setCalculatedWidth] = React.useState(0);
  const [calculatedHeight, setCalculatedHeight] = React.useState(0);

  let width = calculatedWidth;
  let height = calculatedHeight;

  if (calculatedWidth) {
    height = width / aspectRatio;
  } else {
    width = height * aspectRatio;
  }

  return (
    <View
      onLayout={(e) => {
        const layout = e.nativeEvent.layout;
        setCalculatedWidth(layout.width);
        setCalculatedHeight(layout.height);
        onLayout?.(e);
      }}
      {...rest}
      style={[{ width, height }, style]}
    />
  );
};

export default AspectRatio;
