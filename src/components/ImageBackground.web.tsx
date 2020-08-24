import React, { useState } from "react";
import {
  ImageBackground as NativeImage,
  ImageProps,
  StyleProp,
  ImageStyle,
  LayoutChangeEvent,
} from "react-native";
import AspectRatio from "./AspectRatio.web";
import Config from "./Config";

interface Props extends ImageProps {
  source: any;
  style?: StyleProp<ImageStyle>;
  resizeMode?:
    | "cover"
    | "contain"
    | "stretch"
    | "repeat"
    | "center"
    | undefined;
}

const ImageBackground: React.FC<Props> = ({
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
          source={source}
          resizeMode={resizeMode}
        />
      </AspectRatio>
    );
  }

  return <NativeImage source={source} {...props} />;
};

export default ImageBackground;
