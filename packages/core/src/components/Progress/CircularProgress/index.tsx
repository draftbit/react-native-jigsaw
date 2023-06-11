import "react-native-reanimated";
import React from "react";
import {
  CircularProgressProps,
  IndeterminateProgressProps,
  ValueProgressProps,
} from "../ProgressCommon";
import IndeterminateProgress from "../IndeterminateProgress";
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
