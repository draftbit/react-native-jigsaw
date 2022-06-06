import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as NativePicker } from "@react-native-picker/picker";

import type { IconSlot } from "../../interfaces/Icon";
import Portal from "../Portal/Portal";
import Button from "../DeprecatedButton";
import { PickerOption } from "./Picker";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");

interface PickerComponentProps {
  Icon: IconSlot["Icon"];
  androidPickerRef: React.RefObject<any>;
  togglePickerVisible: () => void;
  pickerOptions: PickerOption[];
  internalValue: string | undefined;
  handleValueChange: (newValue: string, itemIndex: number) => void;
}

export const PickerComponent: React.FC<PickerComponentProps> = ({
  Icon,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  androidPickerRef,
  togglePickerVisible,
  pickerOptions,
  internalValue,
  handleValueChange,
}) => {
  return (
    <Portal>
      <View style={styles.iosPicker}>
        <SafeAreaView style={styles.iosSafeArea}>
          <Button
            Icon={Icon}
            type="text"
            onPress={togglePickerVisible}
            style={styles.iosButton}
          >
            {"Close"}
          </Button>

          <NativePicker
            style={styles.iosNativePicker}
            selectedValue={internalValue}
            onValueChange={handleValueChange}
          >
            {(pickerOptions as unknown as PickerOption[]).map((option) => (
              <NativePicker.Item
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ))}
          </NativePicker>
        </SafeAreaView>
      </View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  iosPicker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    maxWidth: deviceWidth,
    maxHeight: deviceHeight,
    backgroundColor: "rgba(234, 237, 242, 1)",
  },
  iosSafeArea: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
    maxWidth: deviceWidth,
  },
  iosButton: {
    alignSelf: "flex-end",
  },
  iosNativePicker: {
    backgroundColor: "white",
  },
});
