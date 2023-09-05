import * as React from "react";
import {
  CommonDropDownPickerProps,
  MultiSelectPickerProps,
} from "../PickerCommon";
import DropDownPicker from "./DropDownPicker";
import { withTheme } from "../../../theming";

const MultiSelectPicker: React.FC<
  React.PropsWithChildren<CommonDropDownPickerProps & MultiSelectPickerProps>
> = ({ value, ...rest }) => {
  //@ts-ignore Ignore theme type issues
  return <DropDownPicker value={value || []} {...rest} />;
};

export default withTheme(MultiSelectPicker);
