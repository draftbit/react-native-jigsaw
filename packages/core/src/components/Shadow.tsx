import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Shadow as ShadowComponent } from "react-native-shadow-2";

interface ShadowProps {
  disabled: boolean;
  startColor: string;
  endColor: string;
  distance: number;
  paintInside: boolean;
  stretch: boolean;
  offsetX: number;
  offsetY: number;
  showShadowSideStart: boolean;
  showShadowSideEnd: boolean;
  showShadowSideTop: boolean;
  showShadowSideBottom: boolean;
  showShadowCornerTopStart: boolean;
  showShadowCornerTopEnd: boolean;
  showShadowCornerBottomStart: boolean;
  showShadowCornerBottomEnd: boolean;
  style?: StyleProp<ViewStyle>;
}

const Shadow: React.FC<ShadowProps> = ({
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
  ...rest
}) => {
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
      {...rest}
    />
  );
};

export default Shadow;
