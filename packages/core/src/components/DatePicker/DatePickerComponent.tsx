import React from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";

const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  mode,
  toggleVisibility,
}) => {
  return Platform.OS === "ios" || Platform.OS === "android" ? (
    <DateTimePickerModal
      date={value}
      mode={mode}
      isVisible={true}
      display={Platform.OS === "ios" ? "spinner" : "default"}
      onCancel={() => {
        console.log("Picker cancelled before selecting anything.");
        toggleVisibility();
      }}
      onConfirm={(data) => {
        onChange(null, data);
      }}
    />
  ) : (
    <DateTimePicker
      value={value}
      mode={mode}
      onChange={onChange}
      display={"default"}
    />
  );
};

export default DatePickerComponent;
