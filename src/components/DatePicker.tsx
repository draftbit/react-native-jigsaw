import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import dateFormat from "dateformat";
import { withTheme } from "../core/theming";

import Portal from "./Portal/Portal";
import Button from "./Button";
import TextField, { Props as TextFieldProps } from "./TextField";
import Touchable from "./Touchable";
import theme from "../styles/DefaultTheme";

interface Props extends TextFieldProps {
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
  // initialDate?: string;
  // locale?: string;
  // minuteInterval?: number;
  // timeZoneOffsetInMinutes?: number;
  // error?: boolean;
  // type?: string;
  date?: Date;
  format?: string;
  onDateChange?: (data?: any) => void;
  disabled?: boolean;
  mode?: "date" | "time" | "datetime";
}

const DatePicker: React.FC<Props> = ({
  style,
  theme: { colors },
  date = new Date(),
  onDateChange = () => {},
  disabled = false,
  mode = "date",
  format,
  ...props
}) => {
  const [pickerVisible, setPickerVisible] = React.useState(false);
  const textField = React.useRef<typeof TextField | null>();

  const formatDate = (): string => {
    if (format) return dateFormat(date, format);

    const months = [
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

    if (mode === "time") {
      return `${date.toLocaleTimeString()}`;
    }

    if (mode === "datetime") {
      return `${date.toLocaleString()}`;
    }

    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const toggleVisibility = async () => {
    console.log("SET TO", !pickerVisible);

    setPickerVisible(!pickerVisible);
    if (textField.current) {
      textField.current.toggleFocus();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <View pointerEvents="none">
          <TextField
            {...props}
            value={formatDate()}
            ref={textField}
            disabled={disabled}
          />
        </View>
      </Touchable>
      {pickerVisible && (
        <Portal>
          <View
            style={[
              styles.picker,
              {
                backgroundColor: colors.divider,
              },
            ]}
          >
            <SafeAreaView style={styles.pickerContainer}>
              <Button
                type="text"
                onPress={toggleVisibility}
                style={styles.closeButton}
              >
                Close
              </Button>
              <DateTimePicker
                value={date}
                onChange={(_event: any, data: any) => {
                  toggleVisibility();
                  onDateChange(data);
                }}
                mode={mode}
              />
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

export default withTheme(DatePicker);
