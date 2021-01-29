import * as React from "react";
import {
  Animated,
  Easing,
  EasingFunction,
  StyleProp,
  ViewStyle,
} from "react-native";
import CircularProgress, {
  Props as CircularProgressProps,
} from "./CircularProgress";
const AnimatedProgress = Animated.createAnimatedComponent(CircularProgress);

type Props = {
  duration?: number;
  easing?: EasingFunction;
  prefill?: number;
  useNativeDriver?: boolean;
  tintColorSecondary?: string;
  onAnimationComplete?: Animated.EndCallback | undefined;
} & CircularProgressProps;

const AnimatedCircularProgress: React.FC<Props> = ({
  duration = 500,
  easing = Easing.out(Easing.ease),
  fill,
  prefill = 0,
  useNativeDriver = false,
  tintColorSecondary,
  onAnimationComplete,
  tintColor = "black",
  ...other
}) => {
  const [fillAnimation] = React.useState<Animated.Value>(
    new Animated.Value(prefill)
  );

  const animate = React.useCallback(
    (
      toVal: number = -1,
      dur?: number,
      ease?: EasingFunction
    ): Animated.CompositeAnimation => {
      const toValue = toVal >= 0 ? toVal : fill;
      const dura = dur || duration;
      const eas = ease || easing;
      const useNative = useNativeDriver;

      const anim = Animated.timing(fillAnimation, {
        useNativeDriver: useNative,
        toValue,
        easing: eas,
        duration: dura,
      });
      anim.start(onAnimationComplete);

      return anim;
    },
    [
      duration,
      easing,
      fill,
      useNativeDriver,
      fillAnimation,
      onAnimationComplete,
    ]
  );

  const animateColor = () => {
    if (!tintColorSecondary) {
      return tintColor;
    }

    const tintAnimation = fillAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: [tintColor, tintColorSecondary],
    });

    return tintAnimation;
  };

  React.useEffect(() => {
    animate();
  }, [fill, animate]);

  return (
    <AnimatedProgress
      {...other}
      style={other.style as Animated.WithAnimatedValue<StyleProp<ViewStyle>>}
      childrenContainerStyle={
        other.childrenContainerStyle as Animated.WithAnimatedValue<
          StyleProp<ViewStyle>
        >
      }
      fill={fillAnimation}
      tintColor={animateColor()}
    />
  );
};

export default AnimatedCircularProgress;
