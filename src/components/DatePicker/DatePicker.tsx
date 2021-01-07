import * as React from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import dateFormat from "dateformat";
import { withTheme } from "../../core/theming";

import Portal from "../Portal/Portal";
import Button from "../Button";
import TextField, { Props as TextFieldProps } from "../TextField";
import Touchable from "../Touchable";
import theme from "../../styles/DefaultTheme";
import DateTimePicker from "./DatePickerComponent";

type Props = {
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
} & TextFieldProps &
  FocusProps;

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
  const textField = React.useRef<typeof TextField | null>(null);

  const formatDate = (): string => {
    if (format) return dateFormat(date, format);

    if (mode === "time") {
      return `${date.toLocaleTimeString()}`;
    }

    if (mode === "datetime") {
      return `${date.toLocaleString()}`;
    }

    return `${
      MONTHS[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const toggleVisibility = async () => {
    setPickerVisible(!pickerVisible);
    if (textField.current) {
      //@ts-ignore
      textField.current.toggleFocus(); // cannot determine if method exists due to component being wrapped in a withTheme()
    }
  };
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, style]}>
      <Touchable disabled={disabled} onPress={toggleVisibility}>
        <View pointerEvents="none">
          <TextField
            {...props}
            value={formatDate()}
            //@ts-ignore
            ref={textField} // cannot determine if ref is of correct type due to component being wrapped in a withTheme()
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
            <View
              style={[
                styles.pickerContainer,
                {
                  paddingTop: insets.top,
                  paddingBottom: insets.bottom,
                  paddingLeft: insets.left,
                  paddingRight: insets.right,
                },
              ]}
            >
              {Platform.OS === "ios" && (
                <Button
                  type="text"
                  onPress={toggleVisibility}
                  style={styles.closeButton}
                >
                  Close
                </Button>
              )}

              <DateTimePicker
                value={date}
                mode={mode}
                isVisible={pickerVisible}
                toggleVisibility={toggleVisibility}
                onChange={(_event: any, data: any) => {
                  toggleVisibility();
                  onDateChange(data);
                }}
              />
            </View>
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
