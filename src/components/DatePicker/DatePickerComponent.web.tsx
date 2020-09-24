import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";
import { withTheme } from "../../core/theming";

const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  mode,
  toggleVisibility,
  isVisible,
  theme: { colors },
}) => {
  const internalTheme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
    },
  });

  const Picker =
    mode === "date"
      ? DatePicker
      : mode === "time"
      ? TimePicker
      : DateTimePicker;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={internalTheme}>
        <Picker
          value={value}
          open={isVisible}
          onChange={(d) => {
            toggleVisibility();
            onChange(null, d);
          }}
          onClose={() => toggleVisibility()}
          variant="dialog"
          TextFieldComponent={() => null}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default withTheme(DatePickerComponent);
