import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Swiper from "react-native-swiper/src";

console.log({ Swiper });

export interface SwiperProps {
  vertical?: boolean;
  loop?: boolean;
  index?: number;
  showsButtons?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  autoplayDirection?: boolean;
  showsPagination?: boolean;
  dotColor?: string;
  activeDotColor?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SwiperComponent = ({
  vertical = true,
  loop = false,
  index = 0,
  showsButtons = true,
  autoplay = false,
  autoplayTimeout = 2.5,
  autoplayDirection = true,
  showsPagination = false,
  dotColor,
  activeDotColor,
  children,
  style,
}: SwiperProps) => (
  <View style={style}>
    <Swiper
      index={index}
      showsButtons={showsButtons}
      loop={loop}
      horizontal={!vertical}
      autoplay={autoplay}
      autoplayTimeout={autoplayTimeout}
      autoplayDirection={autoplayDirection}
      showsPagination={showsPagination}
      dotColor={dotColor}
      activeDotColor={activeDotColor}
    >
      {children}
    </Swiper>
  </View>
);

export default SwiperComponent;
