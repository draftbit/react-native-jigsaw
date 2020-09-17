import React from "react";
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
        toggleVisibility();
        onChange(null, data);
      }}
    />
  );
};

export default DatePickerComponent;
