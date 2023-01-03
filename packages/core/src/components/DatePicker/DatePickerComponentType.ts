import theme from "../../styles/DefaultTheme";

export interface DatePickerComponentProps {
  value: Date;
  onChange: (e: any, data?: any) => void;
  mode: "date" | "time" | "datetime";
  toggleVisibility: () => void;
  isVisible?: boolean;
  displayMode?:
    | "default"
    | "compact"
    | "inline"
    | "spinner"
    | "clock"
    | "calendar"
    | undefined;
  variant?: "dialog" | "inline" | undefined;
  theme?: typeof theme;
}
