import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Shadow as ShadowComponent } from "react-native-shadow-2";

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
  paintInside = false,
  stretch = false,
  style,
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
      containerStyle={style}
      paintInside={paintInside}
      stretch={stretch}
      {...rest}
    />
  );
};

export default Shadow;
