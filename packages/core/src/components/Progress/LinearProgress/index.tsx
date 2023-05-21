import React from "react";
import IndeterminateProgress from "../IndeterminateProgress";
import {
  IndeterminateProgressProps,
  ValueProgressProps,
} from "../ProgressCommon";
import { LinearProgress as LinearProgressComponent } from "./LinearProgress";
import Animated from "react-native-reanimated";
import { withTheme } from "../../../theming";

class LinearProgressClassWrapper extends React.Component<ValueProgressProps> {
  render(): React.ReactNode {
    return <LinearProgressComponent {...this.props} />;
  }
}

const AnimatedLinearProgress = Animated.createAnimatedComponent(
  LinearProgressClassWrapper
);

const LinearProgress: React.FC<
  ValueProgressProps & IndeterminateProgressProps
> = (props) => {
  if (props.indeterminate) {
    return (
      <IndeterminateProgress
        AnimatedProgressComponent={AnimatedLinearProgress}
        {...props}
      />
    );
  } else {
    return <LinearProgressComponent {...props} />;
  }
};

export default withTheme(LinearProgress);
