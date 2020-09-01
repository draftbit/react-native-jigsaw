import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Picker as NativePicker,
} from "react-native";
import { withTheme } from "../../core/theming";

import Portal from "../Portal/Portal";
import Button from "../Button";
import TextField from "../TextField";
import Touchable from "../Touchable";
import { PickerComponentProps } from "./PickerTypes";

const Picker: React.FC<PickerComponentProps> = ({
  style,
  options,
  placeholder,
  selectedValue,
  disabled = false,
  onValueChange = () => {},
  theme: { colors },
  ...props
}) => {
  const textField = React.useRef<typeof TextField | undefined>(undefined);
  const [pickerVisible, setIsPickerVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsPickerVisible(!pickerVisible);
    // @ts-ignore
    textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
  };

  return (
    <View style={[styles.container, style]}>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <TextField
          {...props}
          value={selectedValue}
          placeholder={placeholder}
          // @ts-ignore
          ref={textField} // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
          disabled={disabled}
          pointerEvents="none"
        />
      </Touchable>
      {pickerVisible && (
        <Portal>
          <View style={[styles.picker, { backgroundColor: colors.divider }]}>
            <SafeAreaView style={styles.pickerContainer}>
              <Button
                type="text"
                onPress={toggleVisibility}
                style={styles.closeButton}
              >
                Close
              </Button>
              <NativePicker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
              >
                {options.map((o) => (
                  <NativePicker.Item
                    label={o.label}
                    value={o.value}
                    key={o.value}
                  />
                ))}
              </NativePicker>
            </SafeAreaView>
          </View>
        </Portal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  picker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  pickerContainer: { flexDirection: "column", width: "100%" },
  closeButton: {
    alignSelf: "flex-end",
  },
});

export default withTheme(Picker);
