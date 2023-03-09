import React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Shadow as ShadowComponent } from "react-native-shadow-2";
import { extractBorderAndMarginStyles, extractSizeStyles } from "../utilities";

interface ShadowProps {
  disabled?: boolean;
  startColor?: string;
  endColor?: string;
  distance?: number;
  paintInside?: boolean;
  stretch?: boolean;
  offsetX?: number;
  offsetY?: number;
  showShadowSideStart?: boolean;
  showShadowSideEnd?: boolean;
  showShadowSideTop?: boolean;
  showShadowSideBottom?: boolean;
  showShadowCornerTopStart?: boolean;
  showShadowCornerTopEnd?: boolean;
  showShadowCornerBottomStart?: boolean;
  showShadowCornerBottomEnd?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Shadow: React.FC<React.PropsWithChildren<ShadowProps>> = ({
  offsetX = 0,
  offsetY = 0,
  showShadowSideStart = true,
  showShadowSideEnd = true,
  showShadowSideTop = true,
  showShadowSideBottom = true,
  showShadowCornerTopStart = true,
  showShadowCornerTopEnd = true,
  showShadowCornerBottomStart = true,
  showShadowCornerBottomEnd = true,
  paintInside = true,
  style,
  ...rest
}) => {
  const { borderStyles } = extractBorderAndMarginStyles(style);

  const shadowStyles = StyleSheet.flatten([
    borderStyles,
    extractSizeStyles(style),
  ]);

  const containerStyle = StyleSheet.flatten(style) as StyleProp<any>;
  Object.keys(shadowStyles).forEach((key) => delete containerStyle[key]);

  return (
    <ShadowComponent
      offset={[offsetX, offsetY]}
      sides={{
        start: showShadowSideStart,
        end: showShadowSideEnd,
        top: showShadowSideTop,
        bottom: showShadowSideBottom,
      }}
      corners={{
        topStart: showShadowCornerTopStart,
        topEnd: showShadowCornerTopEnd,
        bottomStart: showShadowCornerBottomStart,
        bottomEnd: showShadowCornerBottomEnd,
      }}
      style={shadowStyles}
      containerStyle={containerStyle}
      paintInside={paintInside}
      {...rest}
    />
  );
};

export default Shadow;
