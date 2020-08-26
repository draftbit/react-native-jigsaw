import * as React from "react";
import { View, Picker as NativePicker, StyleSheet } from "react-native";
import { withTheme } from "../../core/theming";

import TextField from "../TextField";
import Touchable from "../Touchable";
import { PickerComponentProps } from "./PickerTypes";

const Picker: React.FC<PickerComponentProps> = ({
  style,
  options,
  placeholder,
  selectedValue,
  disabled = false,
  onValueChange: onValueChangeOverride = () => {},
  ...props
}) => {
  const textField = React.useRef<typeof TextField | undefined>(undefined);

  const onValueChange = (itemValue: string, itemIndex: number) => {
    toggleFocus();
    onValueChangeOverride(itemValue, itemIndex);
  };

  const toggleFocus = () => {
    if (!disabled) {
      // @ts-ignore
      textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
    }
  };

  return (
    <Touchable
      disabled={disabled}
      onPress={toggleFocus}
      style={[styles.container, style]}
    >
      <View>
        <NativePicker
          enabled={!disabled}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={{
            flex: 1,
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {options.map((o) => (
            <NativePicker.Item label={o.label} value={o.value} key={o.value} />
          ))}
        </NativePicker>
        <View pointerEvents="none">
          <TextField
            {...props}
            value={selectedValue}
            placeholder={placeholder}
            // @ts-ignore
            ref={textField} // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
            disabled={disabled}
          />
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
});

export default withTheme(Picker);
