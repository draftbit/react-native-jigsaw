import * as React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextInput,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import dateFormat from "dateformat";
import { withTheme } from "../../theming";
import Portal from "../Portal/Portal";
import Touchable from "../Touchable";
import DateTimePicker from "./DatePickerComponent";

type Props = {
  style?: StyleProp<ViewStyle>;
  date?: Date;
  format?: string;
  onDateChange?: (data?: Date) => void;
  defaultValue?: Date;
  disabled?: boolean;
  mode?: "date" | "time" | "datetime";
  androidDisplay?: "default" | "spinner" | "calendar" | "clock";
  iosDisplay?: "default" | "spinner" | "compact" | "inline";
  webDisplay?: "dialog" | "inline";
  placeholder?: string;
} & TextInputProps;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePicker: React.FC<React.PropsWithChildren<Props>> = ({
  style,
  date,
  onDateChange = () => {},
  defaultValue,
  disabled = false,
  mode = "date",
  format,
  androidDisplay = "default",
  iosDisplay = "default",
  webDisplay = "dialog",
  placeholder,
  ...props
}) => {
  const [value, setValue] = React.useState<any>(date || defaultValue);

  React.useEffect(() => {
    if (defaultValue != null) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const [pickerVisible, setPickerVisible] = React.useState(false);
  const [focused, setFocused] = React.useState<boolean>(false);

  const getValidDate = (): Date => {
    if (!value) {
      return new Date();
    }
    return typeof value?.getMonth === "function" ? value : new Date();
  };

  const formatDate = (): string => {
    if (!value) return "";
    let newDate = getValidDate();

    if (format) return dateFormat(newDate, format);

    if (mode === "time") {
      return `${newDate.toLocaleTimeString()}`;
    }

    if (mode === "datetime") {
      return `${newDate.toLocaleString()}`;
    }

    return `${
      MONTHS[newDate.getMonth()]
    } ${newDate.getDate()}, ${newDate.getFullYear()}`;
  };

  const toggleVisibility = async () => {
    setPickerVisible(!pickerVisible);
    focused ? _handleBlur() : _handleFocus();
  };

  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    setValue(date);
  }, [date]);

  const _handleFocus = () => {
    if (disabled) {
      return;
    }

    setFocused(true);
  };

  const _handleBlur = () => {
    if (disabled) {
      return;
    }
    setFocused(false);
  };

  const display = Platform.select({
    ios: iosDisplay,
    android: androidDisplay,
    web: webDisplay,
  });

  return (
    <View>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <TextInput
          value={formatDate()}
          placeholder={placeholder}
          editable={!disabled}
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          style={style}
          {...props}
        />
      </Touchable>
      {pickerVisible && (
        <Portal>
          <View
            style={{
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            }}
          >
            <DateTimePicker
              value={getValidDate()}
              mode={mode}
              display={display}
              isVisible={pickerVisible}
              toggleVisibility={toggleVisibility}
              onChange={(_event: any, data: any) => {
                toggleVisibility();
                setValue(data);
                onDateChange(data);
              }}
            />
          </View>
        </Portal>
      )}
    </View>
  );
};

export default withTheme(DatePicker);
