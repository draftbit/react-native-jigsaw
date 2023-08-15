import React from "react";
import { CommonPickerProps } from "./PickerCommon";
import NativePicker from "./NativePicker";
import DropDownPicker from "./DropDownPicker";

interface PickerProps extends CommonPickerProps {
  mode?: "native" | "dropdown";
}

const Picker: React.FC<PickerProps> = ({ mode = "native", ...rest }) => {
  switch (mode) {
    case "native":
      return <NativePicker {...rest} />;
    case "dropdown":
      return <DropDownPicker {...rest} />;
  }
};

export default Picker;
