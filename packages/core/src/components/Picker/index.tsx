import React from "react";
import {
  CommonDropDownPickerProps,
  ModalPickerProps,
  SinglePickerProps,
} from "./PickerCommon";
import NativePicker from "./NativePicker";
import DropDownPicker from "./dropdown/DropDownPicker";
import ModalPicker from "./modal/ModalPicker";
import { withTheme } from "../../theming";

interface PickerProps
  extends CommonDropDownPickerProps,
    SinglePickerProps,
    ModalPickerProps {
  mode?: "native" | "dropdown" | "modal";
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
    case "modal":
      //@ts-ignore Ignore theme type issues
      return <ModalPicker {...rest} />;
  }
};

export const Picker = withTheme(SinglePicker);
export { default as MultiSelectPicker } from "./dropdown/MultiSelectPicker";
export { default as PickerItem } from "./dropdown/PickerItem";
