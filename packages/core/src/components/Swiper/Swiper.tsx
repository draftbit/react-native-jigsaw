import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import SwiperComponent from "react-native-web-swiper";

export interface SwiperProps {
  vertical?: boolean;
  loop?: boolean;
  from?: number;
  timeout?: number;
  prevTitle?: string;
  nextTitle?: string;
  dotsTouchable?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Swiper = ({
  vertical = false,
  loop = false,
  timeout = 0,
  from = 0,
  prevTitle = "",
  nextTitle = "",
  dotsTouchable = true,
  children,
  style,
}: SwiperProps) => (
  <View style={style}>
    <SwiperComponent
      from={from}
      loop={loop}
      timeout={timeout}
      vertical={vertical}
      controlsProps={{
        prevTitle,
        nextTitle,
        dotsTouchable,
      }}
    >
      {children}
    </SwiperComponent>
  </View>
);

export default Swiper;
