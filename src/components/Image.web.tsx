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
  if (style && StyleSheet.flatten(style).aspectRatio) {
    return (
      <AspectRatio style={style as ImageStyle}>
        <NativeImage
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

  return <NativeImage source={source as ImageSourcePropType} {...props} />;
};

export default Image;
