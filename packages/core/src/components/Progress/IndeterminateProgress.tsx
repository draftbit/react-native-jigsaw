import React from "react";
import {
  AnimateProps,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { BaseProgressProps, ValueProgressProps } from "./ProgressCommon";

interface IndeterminateProgressProps extends BaseProgressProps {
  AnimatedProgressComponent: React.ComponentClass<
    AnimateProps<ValueProgressProps>
  >;
}

const IndeterminateProgress: React.FC<IndeterminateProgressProps> = ({
  AnimatedProgressComponent,
  ...rest
}) => {
  const [value, setValue] = React.useState(0);
  const animationDuration = rest.animationDuration;

  const currentOffset = useSharedValue(0);

  const animatedProgressComponentProps = useAnimatedProps<ValueProgressProps>(
    () => {
      return {
        dashOffset: currentOffset.value,
      };
    }
  );

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (value === 0) {
        setValue(100);
        currentOffset.value = withTiming(200, { duration: animationDuration });
      } else {
        setValue(0);
        currentOffset.value = withTiming(0, {
          duration: animationDuration,
        });
      }
    }, animationDuration);
    return () => clearTimeout(timeout);
  }, [value, animationDuration, currentOffset]);

  return (
    <AnimatedProgressComponent
      {...rest}
      animatedProps={animatedProgressComponentProps}
      dashGap={200}
      dashWidth={200}
      animationDuration={animationDuration}
      value={100}
    />
  );
};

export default IndeterminateProgress;
