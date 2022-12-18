import theme from "../../styles/DefaultTheme";

export interface DatePickerComponentProps {
  value: Date;
  onChange: (e: any, data?: any) => void;
  mode: "date" | "time" | "datetime";
  style?: any;
  toggleVisibility: () => void;
  isVisible?: boolean;
  theme?: typeof theme;
}
