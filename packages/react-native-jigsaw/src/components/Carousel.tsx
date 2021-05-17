import * as React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  StyleProp,
  ViewStyle,
} from "react-native";
import Image from "./Image";
import { COMPONENT_TYPES, createResizeModeProp } from "../core/component-types";

const screenWidth = Dimensions.get("window").width;

type Props = {
  data?: any[];
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

function Pager({ index, length }: { index: number; length: number }) {
  return (
    <View style={styles.pager}>
      {Array.from({ length }).map((_, i) => {
        const current = index === i;
        const opacity = current ? 1 : 0.5;
        const size = current ? 12 : 8;
        return (
          <View
            style={[styles.bullet, { opacity, width: size, height: size }]}
          />
        );
      })}
    </View>
  );
}

function Carousel({ data, children, style, ...rest }: Props) {
  const [index, setIndex] = React.useState(0);

  const length = React.Children.count(children);
  const itemsLength = (data?.length ?? 0) + length;
  const slideWidth = screenWidth;
  const slides = Array.isArray(data) ? data : [];

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        pagingEnabled
        horizontal={true}
        decelerationRate="fast"
        scrollEventThrottle={200}
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          const offset = nativeEvent.contentOffset.x;
          const currentIndex = Math.ceil(offset / slideWidth);
          setIndex(currentIndex);
        }}
        {...rest}
      >
        {slides.length > 0
          ? slides.map((item) => {
              return (
                <Image
                  resizeMode="cover"
                  source={typeof item === "string" ? { uri: item } : item}
                  style={{ height: 200, width: slideWidth }}
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
      <Pager index={index} length={itemsLength} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: screenWidth,
    height: 500,
    backgroundColor: "#eee",
  },
  pager: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    marginHorizontal: 2,
    width: 12,
    height: 12,
    borderRadius: 24,
    backgroundColor: "#FFF",
  },
});

export default Carousel;

export const SEED_DATA = [
  {
    name: "Carousel",
    tag: "Carousel",
    category: COMPONENT_TYPES.blocks,
    description: "A horizontal scrolling carousel of images",
    preview_image_url: "{CLOUDINARY_URL}/Carousel.png",
    supports_list_render: false,
    layout: {
      height: 250,
    },
    resizeMode: createResizeModeProp(),
  },
];
