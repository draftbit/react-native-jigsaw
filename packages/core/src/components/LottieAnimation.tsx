import React, { forwardRef } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import LottieView, { AnimationObject } from "lottie-react-native";
import { extractSizeStyles } from "../utilities";

type Props = {
  style?: StyleProp<ViewStyle>;
  resizeMode?: "cover" | "contain" | "center";
  source: string | AnimationObject | { uri: string };
  autoPlay?: boolean;
  loop?: boolean;
};

const LottieAnimation = forwardRef<LottieView, Props>(
  (
    {
      style,
      source,
      autoPlay = true,
      loop = true,
      resizeMode = "cover",
      ...rest
    },
    ref
  ) => {
    const sizeStyles = extractSizeStyles(style);
    return (
      <View style={style}>
        <LottieView
          ref={ref}
          source={source}
          autoPlay={autoPlay}
          loop={loop}
          resizeMode={resizeMode}
          // A specific size is required on mobile, but not on web.
          // This ensures consistent behavior across platforms during preview.
          style={sizeStyles}
          {...rest}
        />
      </View>
    );
  }
);

export default LottieAnimation;
