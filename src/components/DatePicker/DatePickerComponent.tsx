import React from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";

const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  mode,
  toggleVisibility,
}) => {
  return (
    <DateTimePicker
      value={value}
      mode={mode}
      onChange={(_event: any, data: any) => {
        Platform.OS === "ios" ? null : toggleVisibility();
        onChange(null, data);
      }}
      display={Platform.OS === "ios" ? "spinner" : "default"}
    />
  );
};

export default DatePickerComponent;
