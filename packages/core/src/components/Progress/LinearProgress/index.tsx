//Prevents 'r.g.__reanimatedWorkletInit is not a function' issue on snack (https://forums.expo.dev/t/react-native-reanimated-error-r-g-reanimatedworkletinit-is-not-a-function/68222)
//@ts-ignore
if (!global.__reanimatedWorkletInit) {
  //@ts-ignore
  global.__reanimatedWorkletInit = function () {};
}

import React from "react";
import IndeterminateProgress from "../IndeterminateProgress";
import {
  IndeterminateProgressProps,
  ValueProgressProps,
} from "../ProgressCommon";
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
