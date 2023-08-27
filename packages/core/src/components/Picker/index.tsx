import React from "react";
import { CommonDropDownPickerProps, SinglePickerProps } from "./PickerCommon";
import NativePicker from "./NativePicker";
import DropDownPicker from "./dropdown/DropDownPicker";
import { withTheme } from "../../theming";

interface PickerProps extends CommonDropDownPickerProps, SinglePickerProps {
  mode?: "native" | "dropdown";
}

const SinglePicker: React.FC<PickerProps> = ({ mode = "native", ...rest }) => {
  switch (mode) {
    case "native":
      return <NativePicker {...rest} />;
    case "dropdown":
      //@ts-ignore Ignore theme type issues
      return <DropDownPicker {...rest} />;
  }
};

export const Picker = withTheme(SinglePicker);
export { default as MultiSelectPicker } from "./dropdown/MultiSelectPicker";
export { default as PickerItem } from "./dropdown/PickerItem";
