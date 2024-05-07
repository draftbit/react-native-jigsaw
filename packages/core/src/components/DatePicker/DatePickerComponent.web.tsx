import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";
import { withTheme, DefaultTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

const DatePickerComponent: React.FC<Props & { theme: ReadTheme }> = ({
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
        main:
          theme.colors.branding.primary ||
          DefaultTheme.colors.branding?.primary,
      },
      secondary: {
        main:
          theme.colors.branding.secondary ||
          DefaultTheme.colors.branding?.secondary,
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
      <MuiThemeProvider theme={internalTheme}>
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
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default withTheme(DatePickerComponent);
