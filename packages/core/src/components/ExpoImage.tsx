import React from "react";
import {
  Image,
  ImageContentPosition,
  ImageProps as ExpoImageProps,
  ImageContentFit,
} from "expo-image";
import Config from "./Config";

interface ExtendedImageProps extends ExpoImageProps {
  transitionDuration?: number;
  transitionEffect?:
    | "cross-dissolve"
    | "flip-from-top"
    | "flip-from-right"
    | "flip-from-bottom"
    | "flip-from-left"
    | "curl-up"
    | "curl-down";
  transitionTiming?: "ease-in-out" | "ease-in" | "ease-out" | "linear";
  contentFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  contentPosition?: ImageContentPosition;
  cachePolicy?: "none" | "disk" | "memory" | "memory-disk";
  allowDownscaling?: boolean;
  blurRadius?: number;
  blurhash?: string;
}

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
  transitionDuration = 300,
  transitionEffect = "cross-dissolve",
  transitionTiming = "ease-in-out",
  contentFit = "cover",
  contentPosition = "center",
  cachePolicy = "memory-disk",
  allowDownscaling = true,
  blurRadius,
  blurhash,
  ...props
}) => {
  const imageSource = source ?? Config.placeholderImageURL;
  const finalContentFit = resizeMode
    ? resizeModeToContentFit(resizeMode)
    : contentFit;

  const transition = {
    timing: transitionTiming,
    duration: transitionDuration,
    effect: transitionEffect,
  };

  return (
    <Image
      {...props}
      source={imageSource}
      contentFit={finalContentFit}
      placeholder={{
        blurhash,
      }}
      transition={transition}
      contentPosition={contentPosition}
      cachePolicy={cachePolicy}
      allowDownscaling={allowDownscaling}
      blurRadius={blurRadius}
      style={style}
    />
  );
};

export default ExpoImage;
