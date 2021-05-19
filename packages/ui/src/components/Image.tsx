/* README: Internal Image component used for stuff like Card. DO NOT EXPORT! */
import React from "react";
import {
  Image as NativeImage,
  ImageProps,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import Config from "./Config";
import {
  COMPONENT_TYPES,
  createImageProp,
  createResizeModeProp,
} from "@draftbit/types";

import AspectRatio from "./AspectRatio";

type ImageStyleProp = {
  width?: number;
  height?: number;
  aspectRatio?: number;
};

const generateDimensions = ({ aspectRatio, width, height }: ImageStyleProp) => {
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

const Image: React.FC<ImageProps> = ({
  source,
  resizeMode = "cover",
  style,
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

  if (aspectRatio) {
    return (
      <AspectRatio style={[style, { width, height, aspectRatio }]}>
        <NativeImage
          {...props}
          source={imageSource as ImageSourcePropType}
          resizeMode={resizeMode}
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
    <NativeImage
      {...props}
      source={source as ImageSourcePropType}
      resizeMode={resizeMode}
      style={style}
    />
  );
};

export default Image;

export const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  category: COMPONENT_TYPES.media,
  layout: {
    width: 250,
    height: 250,
  },
  props: {
    source: createImageProp(),
    resizeMode: createResizeModeProp(),
  },
};
