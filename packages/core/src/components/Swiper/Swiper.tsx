import {
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createNumberProp,
  createTextProp,
  GROUPS,
} from "@draftbit/types";
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
  prevTitleColor: string;
  nextTitleColor: string;
  dotsTouchable?: boolean;
  // dotColor: string;
  dotActiveColor: string;
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
  prevTitleColor = "red",
  nextTitleColor = "blue",
  dotsTouchable = true,
  // dotColor,
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
      // dotColor={dotColor}
      dotActiveColor={dotActiveColor}
      controlsProps={{
        prevTitle,
        nextTitle,
        prevTitleStyle: { color: prevTitleColor },
        nextTitleStyle: { color: nextTitleColor },
        dotsTouchable,
      }}
    >
      {children}
    </SwiperComponent>
  </View>
);

export default Swiper;

export const SEED_DATA = {
  name: "Swiper",
  tag: "Swiper",
  description: "Swiper container",
  category: COMPONENT_TYPES.container,
  layout: {
    height: 300,
    width: "100%",
  },
  props: {
    from: createNumberProp({
      group: GROUPS.basic,
      label: "Initial Slide",
    }),
    loop: createBoolProp({
      group: GROUPS.basic,
      label: "Loop",
    }),
    timeout: createNumberProp({
      group: GROUPS.basic,
      label: "Timeout",
      defaultValue: 0,
    }),
    vertical: createBoolProp({
      group: GROUPS.basic,
      label: "Vertical",
      defaultValue: false,
    }),
    prevTitle: createTextProp({
      group: GROUPS.basic,
      label: "Previous Title",
      defaultValue: "",
    }),
    nextTitle: createTextProp({
      group: GROUPS.basic,
      label: "Next Title",
      defaultValue: "",
    }),
    prevTitleColor: createColorProp({
      label: "Previous Title Color",
    }),
    nextTitleColor: createColorProp({
      label: "Next Title Color",
    }),
    // dotColor: createColorProp({
    //   label: "Dot Color",
    // }),
    dotActiveColor: createColorProp({
      label: "Dot Active Color",
    }),
    dotsTouchable: createBoolProp({
      group: GROUPS.basic,
      label: "Dots Touchable",
      defaultValue: true,
    }),
  },
};
