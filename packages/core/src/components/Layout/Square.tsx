import React from "react";
import { ViewProps } from "react-native";
import Center from "./Center";

interface SquareProps extends ViewProps {
  size?: number;
}

const Square: React.FC<SquareProps> = ({ size, style, onLayout, ...rest }) => {
  const [calculatedSize, setCalculatedSize] = React.useState(0);

  return (
    <Center
      onLayout={(e) => {
        const layout = e.nativeEvent.layout;
        setCalculatedSize(Math.max(layout.width, layout.height));
        onLayout?.(e);
      }}
      {...rest}
      style={[
        style,
        size ? { width: size, height: size } : {},
        calculatedSize
          ? {
              width: calculatedSize,
              height: calculatedSize,
            }
          : {},
      ]}
    />
  );
};

export default Square;
