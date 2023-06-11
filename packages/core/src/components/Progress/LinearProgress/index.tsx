import "react-native-reanimated";
import React from "react";
import {
  IndeterminateProgressProps,
  ValueProgressProps,
} from "../ProgressCommon";
import IndeterminateProgress from "../IndeterminateProgress";
import { LinearProgress as LinearProgressComponent } from "./LinearProgress";
import { withTheme } from "../../../theming";

const LinearProgress: React.FC<
  ValueProgressProps & IndeterminateProgressProps
> = (props) => {
  if (props.indeterminate) {
    return (
      <IndeterminateProgress
        ProgressComponent={LinearProgressComponent}
        {...props}
      />
    );
  } else {
    return <LinearProgressComponent {...props} />;
  }
};

export default withTheme(LinearProgress);
