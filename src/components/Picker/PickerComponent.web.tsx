import * as React from "react";
import {
  View,
  Picker as NativePicker,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { withTheme } from "../../core/theming";

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
  onValueChanged: onValueChangeOverride = () => {},
  ...props
}) => {
  const textField = React.useRef<typeof TextField | undefined>(undefined);

  const onValueChange = (itemValue: string, itemIndex: number) => {
    toggleFocus();
    onValueChangeOverride(itemValue, itemIndex);
  };

  const toggleFocus = () => {
    if (!disabled) {
      textField.current.toggleFocus();
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
            ref={textField}
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
