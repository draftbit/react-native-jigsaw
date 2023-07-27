import * as React from "react";
import {
  View,
  StyleSheet,
  Platform,
  ViewStyle,
  StyleProp,
  Keyboard,
} from "react-native";
import { isObject } from "lodash";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker as NativePicker } from "@react-native-picker/picker";
import Portal from "../Portal/Portal";
import { Button } from "../Button";
import Touchable from "../Touchable";
import type { IconSlot } from "../../interfaces/Icon";
import {
  extractBorderAndMarginStyles,
  extractSizeStyles,
  extractFlexItemStyles,
  extractPositionStyles,
} from "../../utilities";
import TextField from "../TextField";
import omit from "lodash.omit";

export interface PickerOption {
  value: string;
  label: string;
}

export type PickerProps = {
  error?: any;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> & { height?: number };
  value?: string;
  options: PickerOption[] | string[];
  onValueChange: (value: string) => void;
  assistiveText?: string;
  label?: string;
  iconColor?: string;
  iconSize?: number;
  leftIconMode?: "inset" | "outset";
  leftIconName?: string;
  placeholderTextColor?: string;
  rightIconName?: string;
  type?: "solid" | "underline";
  autoDismissKeyboard?: boolean;
} & IconSlot;

const isIos = Platform.OS === "ios";
const isWeb = Platform.OS === "web";

const Picker: React.FC<PickerProps> = ({
  options: optionsProp = [],
  onValueChange,
  Icon,
  style,
  placeholder,
  value,
  disabled = false,
  autoDismissKeyboard = true,
  ...rest
}) => {
  const pickerRef = React.useRef<NativePicker<string>>(null);

  const [pickerVisible, setPickerVisible] = React.useState(false);

  const options = React.useMemo(() => {
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

  const selectedLabel =
    options.find((option) => option.value === String(value))?.label ||
    value ||
    placeholder;

  const containerStyle = StyleSheet.flatten([
    extractSizeStyles(style),
    extractPositionStyles(style),
    extractFlexItemStyles(style),
    extractBorderAndMarginStyles(style).marginStyles,
  ]);
  const textFieldStyle = omit(style, Object.keys(containerStyle));

  const renderNativePicker = () => (
    <NativePicker
      ref={pickerRef}
      selectedValue={value}
      onValueChange={(newValue) => {
        if (newValue !== placeholder) {
          onValueChange?.(newValue);
        } else if (newValue === placeholder) {
          onValueChange?.("");
        }
      }}
      style={[
        styles.nativePicker,
        isIos ? styles.iosNativePicker : styles.nonIosPicker,
      ]}
      onBlur={() => setPickerVisible(false)}
    >
      {(options as unknown as PickerOption[]).map((option) => (
        <NativePicker.Item
          label={option.label}
          value={option.value}
          key={option.value}
        />
      ))}
    </NativePicker>
  );

  const renderPicker = () => {
    if (isIos) {
      return (
        <Portal>
          <SafeAreaView style={styles.nativePicker}>
            <View style={styles.iosPickerContent}>
              <Button
                Icon={Icon}
                type="text"
                onPress={() => setPickerVisible(!pickerVisible)}
                style={styles.iosButton}
              >
                {"Close"}
              </Button>
              {renderNativePicker()}
            </View>
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
    <View style={containerStyle}>
      <Touchable
        disabled={disabled}
        onPress={() => setPickerVisible(!pickerVisible)}
      >
        <TextField
          Icon={Icon}
          numberOfLines={1}
          onChangeText={() => {}}
          value={String(selectedLabel ?? placeholder)}
          editable={false}
          disabled={disabled}
          style={textFieldStyle}
          {...rest}
        />
      </Touchable>

      {/* Web version is collapsed by default, always show to allow direct expand */}
      {(pickerVisible || isWeb) && renderPicker()}
    </View>
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
  },
  iosPickerContent: {
    flexDirection: "column",
    width: "100%",
  },
  iosButton: {
    alignSelf: "flex-end",
  },
  iosNativePicker: {
    backgroundColor: "white",
  },
  nonIosPicker: {
    opacity: 0,
  },
});

function normalizeToPickerOptions(
  options: PickerOption[] | string[] | number[]
): PickerOption[] {
  if (options.length === 0) {
    return [];
  }

  const firstOption = options[0];

  if (typeof firstOption === ("string" || "number")) {
    return options.map((option) => ({
      label: String(option),
      value: String(option),
    }));
  }

  if (isObject(firstOption) && firstOption.value && firstOption.label) {
    return (options as PickerOption[]).map((option) => {
      return {
        label: String(option.label),
        value: String(option.value),
      };
    });
  }

  throw new Error(
    'Picker options must be either an array of strings or array of { "label": string; "value": string; } objects.'
  );
}

export default Picker;
