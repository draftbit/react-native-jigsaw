import * as React from "react";
import { StyleSheet, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as NativePickerComponent } from "@react-native-picker/picker";
import Portal from "../Portal/Portal";
import { Button } from "../Button";
import { useDeepCompareMemo } from "../../utilities";
import {
  CommonPickerProps,
  SinglePickerProps,
  normalizeToPickerOptions,
  PickerOption,
} from "./PickerCommon";
import PickerInputContainer from "./PickerInputContainer";
import { ReadTheme, withTheme } from "@draftbit/theme";
import { IconSlot } from "../../interfaces/Icon";

/**
 * Duplicated version of NativePicker.tsx for maintaining state inside the Portal container to avoid this issue
 * https://github.com/react-native-picker/picker/issues/615
 */

interface PortalPickerContentProps extends IconSlot {
  value: string | number | undefined;
  options: PickerOption[];
  placeholder?: string;
  onValueChange?: (value: string | number) => void;
  onClose: () => void;
  theme: ReadTheme;
  autoDismissKeyboard?: boolean;
}

const PortalPickerContent: React.FC<PortalPickerContentProps> = ({
  value,
  options,
  placeholder,
  onValueChange,
  onClose,
  Icon,
  theme,
  autoDismissKeyboard = true,
}) => {
  const pickerRef = React.useRef<NativePickerComponent<string | number>>(null);

  // Manage value state inside the Portal to avoid stale state issues across the Portal boundary
  const [internalValue, setInternalValue] = React.useState<
    string | number | undefined
  >(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  React.useEffect(() => {
    if (autoDismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [autoDismissKeyboard]);

  return (
    <SafeAreaView
      style={[
        styles.iosPickerContent,
        { backgroundColor: theme.colors.background.base },
      ]}
    >
      <Button
        Icon={Icon}
        onPress={onClose}
        style={[styles.iosButton, { color: theme.colors.branding.primary }]}
        title="Close"
      />
      <NativePickerComponent
        ref={pickerRef}
        testID="native-picker-component"
        selectedValue={internalValue}
        onValueChange={(newValue) => {
          setInternalValue(newValue);
          if (newValue !== placeholder) {
            onValueChange?.(newValue);
          } else if (newValue === placeholder) {
            onValueChange?.("");
          }
        }}
        style={[
          styles.iosNativePicker,
          { backgroundColor: theme.colors.background.base },
        ]}
        onBlur={onClose}
      >
        {options.map((option) => (
          <NativePickerComponent.Item
            testID="native-picker-item"
            label={option.label.toString()}
            value={option.value}
            key={option.value}
            color={theme.colors.text.strong}
          />
        ))}
      </NativePickerComponent>
    </SafeAreaView>
  );
};

const NativePicker: React.FC<CommonPickerProps & SinglePickerProps> = ({
  options: optionsProp = [],
  onValueChange,
  Icon,
  placeholder,
  value,
  autoDismissKeyboard = true,
  theme,
  disabled,
  ...rest
}) => {
  const [pickerVisible, setPickerVisible] = React.useState(false);

  const options = useDeepCompareMemo(() => {
    const normalizedOptions = normalizeToPickerOptions(optionsProp);

    // Underlying Picker component defaults selection to first element when value is not provided (or undefined)
    // Placholder must be the 1st option in order to allow selection of the 'actual' 1st option
    if (placeholder) {
      return [{ label: placeholder, value: placeholder }, ...normalizedOptions];
    } else {
      return normalizedOptions;
    }
  }, [placeholder, optionsProp]);

  // When no placeholder is provided then first item should be marked selected to reflect underlying Picker internal state
  if (!placeholder && options.length && !value && value !== options[0].value) {
    onValueChange?.(options[0].value);
  }

  return (
    <PickerInputContainer
      testID="native-picker"
      Icon={Icon}
      placeholder={placeholder}
      selectedValue={value}
      options={options}
      onPress={() => setPickerVisible(!pickerVisible)}
      disabled={disabled}
      {...rest}
    >
      {pickerVisible && !disabled && (
        <Portal>
          <PortalPickerContent
            value={value}
            options={options}
            placeholder={placeholder}
            onValueChange={onValueChange}
            onClose={() => setPickerVisible(false)}
            Icon={Icon}
            theme={theme}
            autoDismissKeyboard={autoDismissKeyboard}
          />
        </Portal>
      )}
    </PickerInputContainer>
  );
};

const styles = StyleSheet.create({
  iosNativePicker: {
    backgroundColor: "white",
  },
  iosPickerContent: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
  },
  iosButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});

export default withTheme(NativePicker);
