import React from "react";
import {
  Image as NativeImage,
  ImageStyle,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import AspectRatio from "./AspectRatio.web";
import Config from "./Config";

const Image: React.FC<ImageProps> = ({
  source = Config.placeholderImageURL,
  style,
  resizeMode = "cover",
  ...props
}) => {
  const flattenedStyles = StyleSheet.flatten(style || {});
  if (flattenedStyles.aspectRatio) {
    return (
      <AspectRatio style={[style, { width: flattenedStyles.width || "100%" }]}>
        <NativeImage
          {...props}
          style={[
            style,
            {
              height: "100%",
              width: "100%",
            },
          ]}
          source={source as ImageSourcePropType}
          resizeMode={resizeMode}
        />
      </AspectRatio>
    );
  }

  return (
    <NativeImage
      {...props}
      style={style as ImageStyle}
      source={source as ImageSourcePropType}
      resizeMode={resizeMode}
    />
  );
};

export default Image;
