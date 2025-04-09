import React from "react";
import { Platform } from "react-native";
import DateTimePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";

const DatePickerComponent: React.FC<React.PropsWithChildren<Props>> = ({
  value,
  onChange,
  mode,
  minimumDate,
  maximumDate,
  toggleVisibility,
  inline,
}) => {
  if (inline) {
    return (
      <DateTimePicker
        date={value}
        mode={mode}
        onDateChange={(date) => onChange(null, date)}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
      />
    );
  }

  return (
    <DateTimePickerModal
      date={value}
      mode={mode}
      isVisible={true}
      display={Platform.OS === "ios" ? "spinner" : "default"}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      onCancel={() => {
        console.log("Picker cancelled before selecting anything.");
        toggleVisibility();
      }}
      onConfirm={(data) => {
        onChange(null, data);
      }}
    />
  );
};

export default DatePickerComponent;
