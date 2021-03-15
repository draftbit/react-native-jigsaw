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
  FORM_TYPES,
  PROP_TYPES,
  GROUPS,
} from "../core/component-types";

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
  supports_list_render: false,
  layout: {
    width: 250,
    height: 250,
  },
  props: {
    source: {
      group: GROUPS.data,
      label: "Image Source",
      description: "The source of the image",
      editable: true,
      required: true,
      formType: FORM_TYPES.localImage,
      propType: PROP_TYPES.ASSET,
      defaultValue: "https://static.draftbit.com/images/placeholder-image.png",
    },
    resizeMode: {
      group: GROUPS.basic,
      label: "Resize Mode",
      description:
        "Determines how to resize the image when the frame doesn't match the raw image dimensions",
      editable: true,
      required: false,
      defaultValue: "cover",
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      options: ["cover", "contain", "stretch", "repeat", "center"],
    },
  },
};
