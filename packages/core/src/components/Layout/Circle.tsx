import React from "react";
import { ViewProps, StyleSheet } from "react-native";
import Square from "./Square";
import { pick } from "lodash";
import { convertBackwardCompatiblePropsToStyle } from "./LayoutCommon";

interface CircleProps extends ViewProps {
  size?: number;
}

const Circle: React.FC<CircleProps> = ({ size, style, ...rest }) => {
  const backwardsCompatibleStyle = pick(
    convertBackwardCompatiblePropsToStyle(rest),
    "backgroundColor"
  );

  return (
    <Square
      {...rest}
      size={size}
      style={[backwardsCompatibleStyle, style, styles.circle]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 1000, // Border radius maxes out as a circle, use an overly large number to ensure circle in all cases
  },
});

export default Circle;
