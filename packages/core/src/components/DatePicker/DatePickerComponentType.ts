import theme from "../../styles/DefaultTheme";

export interface DatePickerComponentProps {
  value: Date;
  onChange: (e: any, data?: any) => void;
  mode: "date" | "time" | "datetime";
  toggleVisibility: () => void;
  isVisible?: boolean;
  minimumDate?: Date;
  maximumDate?: Date;
  theme?: typeof theme;
}
