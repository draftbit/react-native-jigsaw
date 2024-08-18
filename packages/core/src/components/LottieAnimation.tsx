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
          // This due to on mobile size required size on mobile but not required on web
          style={sizeStyles}
          {...rest}
        />
      </View>
    );
  }
);

export default LottieAnimation;
