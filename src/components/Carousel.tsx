import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ImageStyle,
  Platform,
} from "react-native";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
} from "../core/component-types";
import Config from "./Config";
import theme from "../styles/DefaultTheme";
import { ResizeModeType } from "./ResizeMode";

const screenWidth = Dimensions.get("window").width;

type Props = {
  images: string[] | Blob[];
  aspectRatio?: number;
  swiperPalette?: "surface" | "non-sruface";
  resizeMode?: ResizeModeType;
  dotColor?: string;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
};

const Carousel: React.FC<Props> = ({
  images = [
    Config.placeholderImageURL,
    Config.placeholderImageURL,
    Config.placeholderImageURL,
    Config.placeholderImageURL,
    Config.placeholderImageURL,
    Config.placeholderImageURL,
    Config.placeholderImageURL,
  ],
  aspectRatio,
  swiperPalette,
  resizeMode = "cover",
  dotColor,
  theme: { colors, spacing },
  style = { height: screenWidth * 0.5 },
  ...rest
}) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [width, setWidth] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollOffset(e.nativeEvent.contentOffset.x);
  };

  const onPageLayout = () => {
    const s = style as ViewStyle;
    if (s.width) {
      setWidth(typeof s.width === "string" ? +s.width : s.width);
    } else {
      setWidth(screenWidth);
    }
  };

  return (
    <View
      style={[styles.container, { aspectRatio, width }, style]}
      onLayout={onPageLayout}
      {...rest}
    >
      <ScrollView
        onScroll={handleScroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={Platform.OS === "web"}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => {
          const imageStyle: StyleProp<ImageStyle> = { width };
          if (aspectRatio) {
            imageStyle.aspectRatio = aspectRatio;
          } else {
            imageStyle.flex = 1;
          }

          return (
            <View style={[styles.slidingPanel, { width }]} key={index}>
              <Image
                source={typeof image === "string" ? { uri: image } : image}
                resizeMode={resizeMode}
                style={{
                  width,
                  flex: 1,
                  aspectRatio,
                  height: (style as ViewStyle).height,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
      <View style={[styles.swipeNavWrapper, { bottom: spacing.large }]}>
        <View style={styles.swipeNav}>
          {Array.from({ length: images.length }, (_, i) => {
            const calculatedIndex = scrollOffset / width;
            const activeDot =
              calculatedIndex >= i - 0.5 && calculatedIndex < i + 0.5;

            let backgroundColor;
            if (dotColor) {
              backgroundColor = dotColor;
            } else {
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
            }

            return (
              <Elevation
                key={i}
                style={[
                  {
                    backgroundColor,
                    marginHorizontal: spacing.small / 2,
                  },
                  styles.dot,
                  activeDot ? styles.activeDot : null,
                ]}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  slidingPanel: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  swipeNavWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  swipeNav: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    opacity: 0.5,
    width: Config.swiperInactiveDotSize,
    height: Config.swiperInactiveDotSize,
    borderRadius: Config.swiperInactiveDotSize,
  },
  activeDot: {
    opacity: 1,
    elevation: 1,
    width: Config.swiperActiveDotSize,
    height: Config.swiperActiveDotSize,
    borderRadius: Config.swiperActiveDotSize,
  },
});

export default withTheme(Carousel);

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
    props: {
      images: {
        group: GROUPS.data,
        label: "Images",
        description: "A series of images to display in the carousel",
        editable: true,
        required: false,
        formType: FORM_TYPES.localImageArray,
        propType: PROP_TYPES.ASSET,
        defaultValue: null,
      },
      resizeMode: {
        group: GROUPS.basic,
        label: "Resize Mode",
        description:
          "Determines how to resize the images when the frame doesn't match the raw image dimensions",
        editable: true,
        required: false,
        defaultValue: "cover",
        formType: FORM_TYPES.flatArray,
        propType: PROP_TYPES.STRING,
        options: ["cover", "contain", "stretch", "repeat", "center"],
      },
      dotColor: {
        group: GROUPS.basic,
        label: "Dot Color",
        description: "Color of the carousel's dots",
        editable: true,
        required: true,
        defaultValue: "strong",
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
      },
    },
  },
];
