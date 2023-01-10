import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import SwiperComponent from "react-native-web-swiper";

export interface SwiperProps<T> {
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
  data?: Array<T>;
  keyExtractor: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
  onIndexChanged?: (index: number) => void;
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
  data,
  keyExtractor,
  renderItem,
  children,
  onIndexChanged,
  style,
}: SwiperProps<any>) => (
  <View style={style}>
    {/* @ts-ignore */}
    <SwiperComponent
      from={from}
      loop={loop}
      timeout={timeout}
      vertical={vertical}
      onIndexChanged={onIndexChanged}
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
      {data && renderItem
        ? data.map((item, index) => {
            const component = renderItem({ item, index });

            if (!component) {
              return null;
            }

            const key = keyExtractor ? keyExtractor(item, index) : index;
            return React.cloneElement(component, {
              key,
            });
          })
        : children}
    </SwiperComponent>
  </View>
);

export default Swiper;
