import React, { useState } from "react";
import {
  ImageBackground as NativeImage,
  ImageProps,
  ImageStyle,
  LayoutChangeEvent,
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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
    setHeight(e.nativeEvent.layout.height);
  };

  if (style && (style as ImageStyle).aspectRatio) {
    return (
      <AspectRatio
        onLayout={onLayout}
        ratio={(style as ImageStyle).aspectRatio!!}
      >
        <NativeImage
          style={[
            style,
            {
              width: width,
              height: height,
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
