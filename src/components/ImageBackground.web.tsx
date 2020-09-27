import React from "react";
import {
  ImageBackground as NativeImage,
  ImageProps,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
import AspectRatio from "./AspectRatio.web";
import Config from "./Config";

const ImageBackground: React.FC<ImageProps> = ({
  source = Config.placeholderImageURL,
  style,
  resizeMode = "cover",
  ...props
}) => {
  if (style && (style as ImageStyle).aspectRatio) {
    return (
      <AspectRatio style={style as ImageStyle}>
        <NativeImage
          style={[
            style,
            {
              width: "100%",
              height: "100%",
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

export default ImageBackground;
