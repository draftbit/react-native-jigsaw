import React from "react";
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  BaseProgressProps,
  DEFAULT_ANIMATION_DURATION,
  ValueProgressProps,
} from "./ProgressCommon";

interface IndeterminateProgressProps extends BaseProgressProps {
  ProgressComponent: React.FunctionComponent<ValueProgressProps>;
}

const IndeterminateProgress: React.FC<IndeterminateProgressProps> = ({
  ProgressComponent,
  ...rest
}) => {
  const [pathWidth, setPathWidth] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [dashOffset, setDashOffset] = React.useState(0);
  const animationDuration =
    rest.animationDuration || DEFAULT_ANIMATION_DURATION;

  const currentOffset = useSharedValue(0);

  // dashOffset animation done through state due to it not being a 'native' prop that reanimated can animate on the native thread
  useAnimatedReaction(
    () => currentOffset.value,
    (result) => runOnJS(setDashOffset)(result)
  );

  const repeatIndeterminateAnimation = React.useCallback(() => {
    if (value === 0) {
      setValue(100);
      currentOffset.value = withTiming(pathWidth, {
        duration: animationDuration,
      });
    } else {
      setValue(0);
      currentOffset.value = withTiming(0, {
        duration: animationDuration,
      });
    }
  }, [currentOffset, value, animationDuration, pathWidth]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      repeatIndeterminateAnimation();
    }, animationDuration);
    return () => clearTimeout(timeout);
  }, [animationDuration, repeatIndeterminateAnimation]);

  return (
    <ProgressComponent
      {...rest}
      testID={rest.testID || "indeterminate-progress"}
      onFullPathWidth={(width) => {
        setPathWidth(width);
        rest.onFullPathWidth?.(width);
      }}
      dashOffset={dashOffset}
      dashGap={pathWidth / 2}
      dashWidth={pathWidth / 2}
      animationDuration={animationDuration}
      minimumValue={0}
      maximumValue={100}
      value={100}
    />
  );
};

export default IndeterminateProgress;
