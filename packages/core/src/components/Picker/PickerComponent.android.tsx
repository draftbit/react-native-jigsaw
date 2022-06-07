import * as React from "react";
import { /* StyleSheet, Dimensions, View, */ Text } from "react-native";

// import { Picker as NativePicker } from "@react-native-picker/picker";

import type { IconSlot } from "../../interfaces/Icon";

import { PickerOption } from "./Picker";

// const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");

interface PickerComponentProps {
  Icon: IconSlot["Icon"];
  androidPickerRef: React.RefObject<any>;
  togglePickerVisible: () => void;
  pickerOptions: PickerOption[];
  internalValue: string | undefined;
  handleValueChange: (newValue: string, itemIndex: number) => void;
}

export const PickerComponent: React.FC<PickerComponentProps> = () => {
  return <Text>android</Text>;
};

// const styles = StyleSheet.create({
//   nonIosPicker: {
//     opacity: 0,
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     width: "100%",
//     maxWidth: deviceWidth,
//     maxHeight: deviceHeight,
//   },
// });
