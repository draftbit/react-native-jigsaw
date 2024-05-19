import React from "react";
import {
  CommonDropDownPickerProps,
  DropDownModalPickerProps,
  SinglePickerProps,
} from "./PickerCommon";
import NativePicker from "./NativePicker";
import DropDownPicker from "./dropdown/DropDownPicker";
import DropDownModalPicker from "./dropdown/DropDownModalPicker";
import { withTheme } from "../../theming";

interface PickerProps
  extends CommonDropDownPickerProps,
    SinglePickerProps,
    DropDownModalPickerProps {
  mode?: "native" | "dropdown" | "dropdown-modal";
}

const SinglePicker: React.FC<React.PropsWithChildren<PickerProps>> = ({
  mode = "native",
  ...rest
}) => {
  switch (mode) {
    case "native":
      //@ts-ignore Ignore theme type issues
      return <NativePicker {...rest} />;
    case "dropdown":
      //@ts-ignore
      return <DropDownPicker {...rest} />;
    case "dropdown-modal":
      //@ts-ignore
      return <DropDownModalPicker {...rest} />;
  }
};

export const Picker = withTheme(SinglePicker);
export { default as MultiSelectPicker } from "./dropdown/MultiSelectPicker";
export { default as PickerItem } from "./dropdown/PickerItem";
