import React from "react";
import {
  MobileDatePicker,
  MobileDateTimePicker,
  MobileTimePicker,
  StaticDatePicker,
  StaticDateTimePicker,
  StaticTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

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
  inline,
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

  let Picker:
    | typeof MobileDatePicker
    | typeof MobileDateTimePicker
    | typeof MobileTimePicker;

  if (inline) {
    switch (mode) {
      case "date":
        Picker = StaticDatePicker;
        break;
      case "time":
        Picker = StaticTimePicker;
        break;
      case "datetime":
        Picker = StaticDateTimePicker;
        break;
    }
  } else {
    switch (mode) {
      case "date":
        Picker = MobileDatePicker;
        break;
      case "time":
        Picker = MobileTimePicker;
        break;
      case "datetime":
        Picker = MobileDateTimePicker;
        break;
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiThemeProvider theme={internalTheme}>
        <Picker
          value={value}
          open={isVisible}
          onChange={(d) => {
            toggleVisibility();
            onChange(null, d);
          }}
          onClose={() => toggleVisibility()}
          slots={{
            textField: () => null,
          }}
          minDate={minimumDate}
          maxDate={maximumDate}
        />
      </MuiThemeProvider>
    </LocalizationProvider>
  );
};

export default withTheme(DatePickerComponent);
