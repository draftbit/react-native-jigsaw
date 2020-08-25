import React, { useState } from "react";
import {
  Image as NativeImage,
  StyleProp,
  ImageStyle,
  ImageProps,
  LayoutChangeEvent,
} from "react-native";
import AspectRatio from "./AspectRatio.web";
import Config from "./Config";
import { ResizeModeType } from "./ResizeMode";

interface Props extends ImageProps {
  source: string | Blob;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ResizeModeType;
}

const Image: React.FC<Props> = ({
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
              width,
              height,
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

export default Image;
