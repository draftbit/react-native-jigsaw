import {
  COMPONENT_TYPES,
  createBoolProp,
  createNumberProp,
  createTextProp,
} from "@draftbit/types";
import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import SwiperComponent from "react-native-web-swiper";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

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
  <View style={[styles.wrapper, style]}>
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

export const SEED_DATA = {
  name: "Swiper",
  tag: "Swiper",
  description: "Swiper container",
  category: COMPONENT_TYPES.container,
  props: {
    from: createNumberProp({
      label: "Initial Slide",
    }),
    loop: createBoolProp({
      label: "Loop",
    }),
    timeout: createNumberProp({
      label: "Timeout",
      defaultValue: 0,
    }),
    vertical: createBoolProp({
      label: "Vertical",
      defaultValue: false,
    }),
    prevTitle: createTextProp({
      label: "Previous Title",
      defaultValue: "",
    }),
    nextTitle: createTextProp({
      label: "Next Title",
      defaultValue: "",
    }),
    dotsTouchable: createBoolProp({
      label: "Dots Touchable",
      defaultValue: true,
    }),
  },
};
