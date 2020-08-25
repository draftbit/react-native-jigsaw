import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Picker as NativePicker,
  StyleProp,
  ViewStyle,
} from "react-native";
import { withTheme } from "../../core/theming";

import Portal from "../Portal/Portal";
import Button from "../Button";
import TextField, { Props as TextFieldProps } from "../TextField";
import Touchable from "../Touchable";

interface PickerOption {
  value: string;
  label: string;
}

interface Props extends TextFieldProps {
  style?: StyleProp<ViewStyle>;
  options: PickerOption[];
  placeholder?: string;
  selectedValue: string;
  disabled?: boolean;
  onValueChanged: (value: string, index: number) => void;
}

const Picker: React.FC<Props> = ({
  style,
  options,
  placeholder,
  selectedValue,
  disabled = false,
  onValueChanged = () => {},
  theme: { colors },
  ...props
}) => {
  const textField = React.useRef<typeof TextField | undefined>(undefined);
  const [pickerVisible, setIsPickerVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsPickerVisible(!pickerVisible);
    textField.current.toggleFocus();
  };

  return (
    <View style={[styles.container, style]}>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <TextField
          {...props}
          value={selectedValue}
          placeholder={placeholder}
          ref={textField}
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
                onValueChange={onValueChanged}
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
