import * as React from "react";
import {
  Switch as NativeSwitch,
  SwitchProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { withTheme } from "../theming";
import FormRow from "./FormRow";
import { RowDirection } from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import { usePrevious } from "../hooks";

type Props = {
  value?: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
  defaultValue?: boolean;
  theme: Theme;
  activeTrackColor: string;
  inactiveTrackColor: string;
  activeThumbColor: string;
  inactiveThumbColor: string;
} & SwitchProps;

function Switch({
  value,
  defaultValue,
  disabled,
  onValueChange,
  activeTrackColor,
  inactiveTrackColor,
  activeThumbColor,
  inactiveThumbColor,
  theme,
  style,
  ...rest
}: Props) {
  const activeTrackThemeColor = activeTrackColor || theme.colors.primary;
  const inactiveTrackThemeColor = inactiveTrackColor || "#EEE";

  const activeThumbThemeColor = activeThumbColor || "#FFF";
  const inactiveThumbThemeColor = inactiveThumbColor || "#FFF";

  const [checked, setChecked] = React.useState(value || defaultValue);

  // This special logic is to handle weird APIs like Airtable that return
  // true or undefined for a boolean
  const previousValue = usePrevious(value) as boolean | undefined;
  React.useEffect(() => {
    if (value !== previousValue) {
      setChecked(Boolean(value));
    }
  }, [value, previousValue]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setChecked(defaultValue);
    }
  }, [defaultValue]);

  return (
    <NativeSwitch
      value={checked}
      disabled={disabled}
      trackColor={{
        false: inactiveTrackThemeColor,
        true: activeTrackThemeColor,
      }}
      thumbColor={value ? activeThumbThemeColor : inactiveThumbThemeColor}
      // @ts-ignore react-native-web only
      activeThumbColor={activeThumbThemeColor}
      ios_backgroundColor={inactiveTrackThemeColor}
      style={style}
      onValueChange={(bool) => {
        setChecked(bool);
        onValueChange && onValueChange(bool);
      }}
      {...rest}
    />
  );
}

type RowProps = {
  label: string;
  direction: RowDirection;
  style?: StyleProp<ViewStyle>;
};

function Row({
  label = "Label",
  direction = RowDirection.Row,
  style,
  value,
  defaultValue,
  disabled,
  onValueChange,
  activeTrackColor,
  inactiveTrackColor,
  activeThumbColor,
  inactiveThumbColor,
  theme,
  ...rest
}: Props & RowProps) {
  const [checked, setChecked] = React.useState(
    value != null ? value : defaultValue
  );

  React.useEffect(() => {
    if (value != null) {
      setChecked(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setChecked(defaultValue);
    }
  }, [defaultValue]);

  return (
    <FormRow
      disabled={disabled}
      onPress={() => {
        setChecked(!checked);
        onValueChange && onValueChange(!checked);
      }}
      label={label}
      direction={direction}
      style={style}
      {...rest}
    >
      <Switch
        theme={theme}
        value={checked}
        disabled={disabled}
        onValueChange={onValueChange}
        activeTrackColor={activeTrackColor}
        inactiveTrackColor={inactiveTrackColor}
        activeThumbColor={activeThumbColor}
        inactiveThumbColor={inactiveThumbColor}
      />
    </FormRow>
  );
}

const SwitchRow = withTheme(Row);
export { SwitchRow };
export default withTheme(Switch);

/* README: SEED_DATA lives inside mappings/Switch.js since there were weird issues taking place with sourceMaps being
 * generated */
