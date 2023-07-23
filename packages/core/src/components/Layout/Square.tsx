import React from "react";
import { ViewProps } from "react-native";
import Center from "./Center";
import { pick } from "lodash";
import { convertBackwardCompatiblePropsToStyle } from "./LayoutCommon";

interface SquareProps extends ViewProps {
  size?: number;
}

const Square: React.FC<SquareProps> = ({ size, style, onLayout, ...rest }) => {
  const [calculatedSize, setCalculatedSize] = React.useState(0);
  const backwardsCompatibleStyle = pick(
    convertBackwardCompatiblePropsToStyle(rest),
    "backgroundColor"
  );

  return (
    <Center
      onLayout={(e) => {
        const layout = e.nativeEvent.layout;
        setCalculatedSize(Math.max(layout.width, layout.height));
        onLayout?.(e);
      }}
      {...rest}
      style={[
        backwardsCompatibleStyle,
        style,
        size != undefined ? { width: size, height: size } : {},
        calculatedSize > 0
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
