import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@material-ui/pickers";

interface Props {
  value: Date;
  onChange: (e: any, data?: any) => void;
  mode: "date" | "time" | "datetime";
  toggleVisibility: () => void;
  isVisible: boolean;
}

const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  mode,
  toggleVisibility,
  isVisible,
}) => {
  const Picker =
    mode === "date"
      ? DatePicker
      : mode === "time"
      ? TimePicker
      : DateTimePicker;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Picker
        value={value}
        open={isVisible}
        onChange={(d) => {
          toggleVisibility();
          onChange(null, d);
        }}
        variant="dialog"
        TextFieldComponent={() => null}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerComponent;
