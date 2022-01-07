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
  prevTitleColor?: string;
  nextTitleColor?: string;
  dotsTouchable?: boolean;
  dotColor?: string;
  dotActiveColor?: string;
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
  prevTitleColor,
  nextTitleColor,
  dotsTouchable = true,
  dotColor,
  dotActiveColor,
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
        prevTitleStyle: { color: prevTitleColor },
        nextTitleStyle: { color: nextTitleColor },
        dotsTouchable,
        ...(dotColor
          ? { dotProps: { badgeStyle: { backgroundColor: dotColor } } }
          : {}),
        ...(dotActiveColor
          ? { dotActiveStyle: { backgroundColor: dotActiveColor } }
          : {}),
      }}
    >
      {children}
    </SwiperComponent>
  </View>
);

export default Swiper;
