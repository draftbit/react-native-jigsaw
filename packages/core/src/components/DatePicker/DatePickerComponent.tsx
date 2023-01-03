import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";

const DatePickerComponent: React.FC<React.PropsWithChildren<Props>> = ({
  value,
  onChange,
  displayMode = "default",
  mode,
  toggleVisibility,
}) => {
  return (
    <DateTimePickerModal
      date={value}
      mode={mode}
      isVisible={true}
      display={displayMode}
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
