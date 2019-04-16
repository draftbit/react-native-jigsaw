import React from "react";
import { ScrollView, Image, View, StyleSheet } from "react-native";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import type { Theme } from "../types";
import Config from "./Config";

export type CarouselProps = {
  images: Array<string | { uri: string }>,
  swiperPalette: "surface" | "background",
  aspectRatio: number,
  theme: Theme,
  style: any
};

class Carousel extends React.PureComponent<CarouselProps> {
  state = {};

  static defaultProps = {
    images: [
      Config.cardImageUrl,
      Config.cardImageUrl,
      Config.cardImageUrl,
      Config.cardImageUrl,
      Config.cardImageUrl,
      Config.cardImageUrl,
      Config.cardImageUrl
    ],
    aspectRatio: 1.25,
    swiperPalette: "background"
  };

  constructor(props) {
    super(props);

    this.state = {
      scrollOffset: 0
    };
  }

  handleScroll = e => {
    this.setState({ scrollOffset: e.nativeEvent.contentOffset.x });
  };

  onPageLayout = event => {
    const { width } = event.nativeEvent.layout;
    this.setState({ width });
  };

  render() {
    const { images, aspectRatio, swiperPalette, theme, style } = this.props;
    const { colors, spacing } = theme;
    const { width } = this.state;

    return (
      <View
        style={[styles.container, style, { aspectRatio }]}
        onLayout={this.onPageLayout}
      >
        <ScrollView
          onScroll={this.handleScroll}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image, index) => (
            <View style={[styles.slidingPanel, { width }]} key={index}>
              <Image
                source={typeof image === "string" ? { uri: image } : image}
                resizeMode="cover"
                style={{ width, aspectRatio }}
              />
            </View>
          ))}
        </ScrollView>
        <View style={[styles.swipeNavWrapper, { bottom: spacing.large }]}>
          <View style={styles.swipeNav}>
            {[...Array(images.length)].map((_, i) => {
              const calculatedIndex = this.state.scrollOffset / width;
              const activeDot =
                calculatedIndex >= i - 0.5 && calculatedIndex < i + 0.5;

              let backgroundColor;
              if (swiperPalette === "surface") {
                if (activeDot) {
                  backgroundColor = colors.strong;
                } else {
                  backgroundColor = colors.light;
                }
              } else {
                if (activeDot) {
                  backgroundColor = colors.background;
                } else {
                  backgroundColor = colors.surface;
                }
              }

              return (
                <Elevation
                  key={i}
                  style={[
                    { backgroundColor, marginHorizontal: spacing.small / 2 },
                    styles.dot,
                    activeDot ? styles.activeDot : null
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  slidingPanel: {
    alignItems: "center",
    justifyContent: "center"
  },
  swipeNavWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0
  },
  swipeNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    width: Config.swiperInactiveDotSize,
    height: Config.swiperInactiveDotSize,
    borderRadius: Config.swiperInactiveDotSize
  },
  activeDot: {
    opacity: 1,
    elevation: 1,
    width: Config.swiperActiveDotSize,
    height: Config.swiperActiveDotSize,
    borderRadius: Config.swiperActiveDotSize
  }
});

export default withTheme(Carousel);

export const SEED_DATA = [
  {
    name: "Carousel",
    tag: "Carousel",
    category: COMPONENT_TYPES.carousel,
    description: "A horizontal scrolling carousel of images",
    preview_image_url: "{CLOUDINARY_URL}/Carousel.png",
    supports_list_render: false,
    layout: {
      width: "100%",
      height: 250
    },
    props: {
      images: {
        label: "Images",
        description: "A series of images to display in the carousel",
        editable: true,
        type: FORM_TYPES.localImageArray,
        value: null
      },
      swiperPalette: {
        label: "Swiper palette",
        description: "The palette type to use for the swiper",
        editable: true,
        type: FORM_TYPES.flatArray,
        value: "background",
        options: ["background", "surface"],
        required: true
      },
      aspectRatio: {
        label: "Aspect ratio",
        description: "Aspect ratio of the carousel",
        type: FORM_TYPES.aspectRatio,
        value: 1.25,
        editable: true,
        required: true
      }
    }
  }
];
