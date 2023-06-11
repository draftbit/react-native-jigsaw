//Prevents 'r.g.__reanimatedWorkletInit is not a function' issue on snack (https://forums.expo.dev/t/react-native-reanimated-error-r-g-reanimatedworkletinit-is-not-a-function/68222)
//@ts-ignore
if (!global.__reanimatedWorkletInit) {
  //@ts-ignore
  global.__reanimatedWorkletInit = function () {};
}

import React from "react";
import IndeterminateProgress from "../IndeterminateProgress";
import {
  CircularProgressProps,
  IndeterminateProgressProps,
  ValueProgressProps,
} from "../ProgressCommon";
import { CircularProgress as CircularProgressComponent } from "./CircularProgress";
import { withTheme } from "../../../theming";

const CircularProgress: React.FC<
  ValueProgressProps & IndeterminateProgressProps & CircularProgressProps
> = (props) => {
  if (props.indeterminate) {
    return (
      <IndeterminateProgress
        ProgressComponent={
          CircularProgressComponent as React.FunctionComponent<ValueProgressProps>
        }
        {...props}
      />
    );
  } else {
    return <CircularProgressComponent {...props} />;
  }
};

export default withTheme(CircularProgress);
