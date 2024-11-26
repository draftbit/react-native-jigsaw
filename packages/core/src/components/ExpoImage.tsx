/* README: Internal Image component used for stuff like Card. DO NOT EXPORT! */
import React from "react";
import { StyleSheet, ImageSourcePropType, DimensionValue } from "react-native";
import {
  Image,
  ImageContentPosition,
  ImageProps as ExpoImageProps,
  ImageContentFit,
} from "expo-image";
import Config from "./Config";
import AspectRatio from "./AspectRatio";

type ImageStyleProp = {
  width?: number;
  height?: number;
  aspectRatio?: number;
};

interface ExtendedImageProps extends ExpoImageProps {
  placeholder?: {
    blurhash?: string;
    thumbhash?: string;
  };
  transition?:
    | number
    | {
        duration?: number;
        effect?:
          | "cross-dissolve"
          | "flip-from-top"
          | "flip-from-right"
          | "flip-from-bottom"
          | "flip-from-left"
          | "curl-up"
          | "curl-down";
        timing?: "ease-in-out" | "ease-in" | "ease-out" | "linear";
      };
  contentFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  contentPosition?: ImageContentPosition;
  cachePolicy?: "none" | "disk" | "memory" | "memory-disk";
  allowDownscaling?: boolean;
  recyclingKey?: string;
}

const generateDimensions = ({
  aspectRatio,
  width,
  height,
}: ImageStyleProp): {
  aspectRatio?: number;
  width?: DimensionValue;
  height?: DimensionValue;
} => {
  if (aspectRatio && !width && !height) {
    return {
      aspectRatio,
      width: "100%",
    };
  }

  if (aspectRatio && height) {
    return {
      aspectRatio,
      height,
      width: aspectRatio * height,
    };
  }

  if (aspectRatio && width) {
    return {
      aspectRatio,
      width,
      height: width / aspectRatio,
    };
  }

  return { width, height };
};

const resizeModeToContentFit = (
  resizeMode: "cover" | "contain" | "stretch" | "repeat" | "center"
): ImageContentFit => {
  const mapping: Record<typeof resizeMode, ImageContentFit> = {
    cover: "cover",
    contain: "contain",
    stretch: "fill",
    repeat: "none",
    center: "scale-down",
  } as const;
  return mapping[resizeMode] ?? "cover";
};

const ExpoImage: React.FC<ExtendedImageProps> = ({
  source,
  resizeMode = "cover",
  style,
  placeholder,
  transition = 300,
  contentFit = "cover",
  contentPosition = "center",
  cachePolicy = "memory-disk",
  allowDownscaling = true,
  recyclingKey,
  ...props
}) => {
  let imageSource =
    source === null || source === undefined
      ? Config.placeholderImageURL
      : source;

  const styles = StyleSheet.flatten(style || {});
  const { aspectRatio, width, height } = generateDimensions(
    styles as ImageStyleProp
  );

  const finalContentFit = resizeMode
    ? resizeModeToContentFit(resizeMode)
    : contentFit;

  if (aspectRatio) {
    return (
      <AspectRatio style={[style, { width, height, aspectRatio }]}>
        <Image
          {...props}
          source={imageSource as ImageSourcePropType}
          contentFit={finalContentFit}
          placeholder={placeholder}
          transition={transition}
          contentPosition={contentPosition}
          cachePolicy={cachePolicy}
          allowDownscaling={allowDownscaling}
          recyclingKey={recyclingKey}
          style={[
            style,
            {
              height: "100%",
              width: "100%",
            },
          ]}
        />
      </AspectRatio>
    );
  }

  return (
    <Image
      {...props}
      source={source as ImageSourcePropType}
      contentFit={finalContentFit}
      placeholder={placeholder}
      transition={transition}
      contentPosition={contentPosition}
      cachePolicy={cachePolicy}
      allowDownscaling={allowDownscaling}
      recyclingKey={recyclingKey}
      style={style}
    />
  );
};

export default ExpoImage;
