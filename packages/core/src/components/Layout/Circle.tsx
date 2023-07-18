import React from "react";
import { ViewProps, StyleSheet } from "react-native";
import Square from "./Square";

interface CircleProps extends ViewProps {
  size?: number;
}

const Circle: React.FC<CircleProps> = ({ size, style, ...rest }) => {
  return <Square {...rest} size={size} style={[style, styles.circle]} />;
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 1000, // Border radius maxes out as a circle, use an overly large number to ensure circle in all cases
  },
});

export default Circle;
