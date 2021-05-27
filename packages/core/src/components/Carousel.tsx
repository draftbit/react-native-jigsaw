import * as React from "react";
import { withTheme } from "../theming";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import Image from "./Image";
import {
  COMPONENT_TYPES,
  createResizeModeProp,
  createColorProp,
} from "@draftbit/types";

const screenWidth = Dimensions.get("window").width;

type Props = {
  data?: any[];
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  dotColor?: string;
};

function Pager({
  color,
  index,
  length,
}: {
  color: string;
  index: number;
  length: number;
}) {
  return (
    <View style={styles.pager}>
      {Array.from({ length }).map((_, i) => {
        const current = index === i;
        const opacity = current ? 1 : 0.5;
        const size = current ? 10 : 8;
        return (
          <View
            key={i}
            style={[
              styles.bullet,
              { backgroundColor: color, opacity, width: size, height: size },
            ]}
          />
        );
      })}
    </View>
  );
}

function Carousel({
  data,
  children,
  dotColor = "strong",
  style,
  ...rest
}: Props) {
  const [index, setIndex] = React.useState(0);

  const length = React.Children.count(children);
  const itemsLength = (data?.length ?? 0) + length;
  const slides = Array.isArray(data) ? data : [];

  const { width, height } = StyleSheet.flatten(style || {});
  const slideWidth = width || screenWidth;
  const slideHeight = height || 250;

  return (
    <View style={[styles.container, style]} {...rest}>
      <ScrollView
        pagingEnabled
        horizontal
        decelerationRate="fast"
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          const layoutWidth = nativeEvent.layoutMeasurement.width;
          const offset = nativeEvent.contentOffset.x;
          const currentIndex = Math.ceil(offset / layoutWidth);
          setIndex(currentIndex);
        }}
      >
        {slides.length > 0
          ? slides.map((item, i) => {
              return (
                <Image
                  key={i}
                  resizeMode="cover"
                  source={typeof item === "string" ? { uri: item } : item}
                  style={[{ width: slideWidth, height: slideHeight }]}
                />
              );
            })
          : null}
        {React.Children.map(children, (child: any) => {
          const s = child?.props?.style || {};
          return (
            <View style={{ width: slideWidth }}>
              {React.cloneElement(child, {
                style: { ...s, width: slideWidth },
              })}
            </View>
          );
        })}
      </ScrollView>
      <Pager color={dotColor} index={index} length={itemsLength} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    position: "relative",
    width: screenWidth,
    backgroundColor: "#eee",
  },
  pager: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    marginHorizontal: 2,
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: "#000",
  },
});

export default withTheme(Carousel);

export const SEED_DATA = [
  {
    name: "Carousel",
    tag: "Carousel",
    category: COMPONENT_TYPES.media,
    description: "A horizontal scrolling carousel of images",
    layout: {},
    props: {
      resizeMode: createResizeModeProp(),
      dotColor: createColorProp({
        label: "Dot color",
      }),
    },
  },
];
