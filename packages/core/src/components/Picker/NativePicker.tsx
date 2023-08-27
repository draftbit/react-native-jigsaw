import * as React from "react";
import { StyleSheet, Platform, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as NativePickerComponent } from "@react-native-picker/picker";
import Portal from "../Portal/Portal";
import { Button } from "../Button";
import { useDeepCompareMemo } from "../../utilities";
import {
  CommonPickerProps,
  SinglePickerProps,
  normalizeToPickerOptions,
} from "./PickerCommon";
import PickerInputContainer from "./PickerInputContainer";
import { withTheme } from "../../theming";
import { Theme } from "../../styles/DefaultTheme";

const isIos = Platform.OS === "ios";
const isWeb = Platform.OS === "web";

const NativePicker: React.FC<
  CommonPickerProps & SinglePickerProps & { theme: Theme }
> = ({
  options: optionsProp = [],
  onValueChange,
  Icon,
  placeholder,
  value,
  autoDismissKeyboard = true,
  theme,
  ...rest
}) => {
  const pickerRef = React.useRef<NativePickerComponent<string | number>>(null);

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

  const renderNativePicker = () => (
    <NativePickerComponent
      ref={pickerRef}
      selectedValue={value}
      onValueChange={(newValue) => {
        if (newValue !== placeholder) {
          onValueChange?.(newValue);
        } else if (newValue === placeholder) {
          onValueChange?.("");
        }
      }}
      style={isIos ? styles.iosNativePicker : styles.nativePicker}
      onBlur={() => setPickerVisible(false)}
    >
      {options.map((option) => (
        <NativePickerComponent.Item
          label={option.label.toString()}
          value={option.value}
          key={option.value}
        />
      ))}
    </NativePickerComponent>
  );

  const renderPicker = () => {
    if (isIos) {
      return (
        <Portal>
          <SafeAreaView style={styles.iosPickerContent}>
            <Button
              Icon={Icon}
              onPress={() => setPickerVisible(!pickerVisible)}
              style={[styles.iosButton, { color: theme.colors.primary }]}
              title="Close"
            />
            {renderNativePicker()}
          </SafeAreaView>
        </Portal>
      );
    } else {
      return renderNativePicker();
    }
  };

  React.useEffect(() => {
    if (pickerVisible && pickerRef.current) {
      pickerRef?.current?.focus();
    }
  }, [pickerVisible, pickerRef]);

  React.useEffect(() => {
    if (pickerVisible && autoDismissKeyboard) {
      Keyboard.dismiss();
    }
  }, [pickerVisible, autoDismissKeyboard]);

  return (
    <PickerInputContainer
      Icon={Icon}
      placeholder={placeholder}
      selectedValue={value}
      options={options}
      onPress={() => setPickerVisible(!pickerVisible)}
      {...rest}
    >
      {/* Web version is collapsed by default, always show to allow direct expand */}
      {(pickerVisible || isWeb) && renderPicker()}
    </PickerInputContainer>
  );
};

const styles = StyleSheet.create({
  nativePicker: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
    opacity: 0,
    ...Platform.select({
      web: {
        height: "100%", //To have the <select/> element fill the height
      },
    }),
  },
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
