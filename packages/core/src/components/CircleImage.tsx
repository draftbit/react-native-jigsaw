import * as React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from "react-native";
import Config from "./Config";
interface Props {
  source?: string | ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

const CircleImage: React.FC<React.PropsWithChildren<Props>> = ({
  source = Config.placeholderImageURL,
  size = 60,
  style,
  ...props
}) => {
  const borderRadius = size / 2;

  return (
    <Image
      style={[{ width: size, height: size, borderRadius }, style]}
      source={typeof source === "string" ? { uri: source } : source}
      resizeMode="cover"
      {...props}
    />
  );
};

export default CircleImage;
