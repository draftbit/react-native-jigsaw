import React, { forwardRef } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import LottieView, { AnimationObject } from "lottie-react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  className?: string;
  resizeMode?: "cover" | "contain" | "center";
  source: string | AnimationObject | { uri: string };
  autoPlay?: boolean;
  speed?: number;
  loop?: boolean;
};

const LottieAnimation = forwardRef<LottieView, Props>(
  (
    {
      style,
      className,
      source,
      autoPlay = true,
      loop = true,
      resizeMode = "cover",
      speed = 1,
      ...rest
    },
    ref
  ) => {
    return (
      <View
        style={style}
        // @ts-ignore
        className={className}
        {...rest}
      >
        <LottieView
          ref={ref}
          source={source}
          autoPlay={autoPlay}
          loop={loop}
          resizeMode={resizeMode}
          speed={speed}
          // A specific size is required on mobile, but not on web.
          // This ensures consistent behavior across platforms during preview.
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }
);

export default LottieAnimation;
