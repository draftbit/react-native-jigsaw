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
import { withTheme, DefaultTheme } from "@draftbit/theme";
import type { Theme } from "@draftbit/theme";

const DatePickerComponent: React.FC<Props & { theme: Theme }> = ({
  value,
  onChange,
  mode,
  toggleVisibility,
  isVisible,
  minimumDate,
  maximumDate,
  theme,
}) => {
  const internalTheme = createMuiTheme({
    palette: {
      primary: {
        main: theme.colors.primary || DefaultTheme.colors.primary,
      },
      secondary: {
        main: theme.colors.secondary || DefaultTheme.colors.secondary,
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
          minDate={minimumDate}
          maxDate={maximumDate}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default withTheme(DatePickerComponent);
