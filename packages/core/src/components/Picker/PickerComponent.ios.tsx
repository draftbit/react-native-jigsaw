import * as React from "react";
import { /* View, StyleSheet, Dimensions, */ Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Picker as NativePicker } from "@react-native-picker/picker";

import type { IconSlot } from "../../interfaces/Icon";
// import Portal from "../Portal/Portal";
// import Button from "../DeprecatedButton";
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
  return <Text>ios</Text>;
};

// const styles = StyleSheet.create({
//   iosPicker: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     justifyContent: "center",
//     width: deviceWidth, // TODO
//     maxWidth: deviceWidth,
//     maxHeight: deviceHeight,
//     backgroundColor: "green", // TODO
//     // backgroundColor: "rgba(255, 255, 255, 1)",
//   },
//   iosSafeArea: {
//     backgroundColor: "yellow",
//     // backgroundColor: "white",// TODO
//     flexDirection: "column",
//     width: deviceWidth,
//     maxWidth: deviceWidth,
//   },
//   iosButton: {
//     alignSelf: "flex-end",
//   },
//   iosNativePicker: {
//     //backgroundColor: "white",// TODO
//     backgroundColor: "red",
//   },
// });
