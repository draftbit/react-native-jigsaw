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
  initialValue?: boolean; // deprecated
  defaultValue?: boolean;
  theme: Theme;
  activeTrackColor: string;
  inactiveTrackColor: string;
  activeThumbColor: string;
  inactiveThumbColor: string;
} & SwitchProps;

function Switch({
  value,
  initialValue,
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
  React.useEffect(() => {
    if (value != null && value !== checked) {
      setChecked(value);
    }
  }, [value, checked]);

  const booleanInitialValue = Boolean(initialValue);
  const previousInitialValue = usePrevious(booleanInitialValue);

  React.useEffect(() => {
    if (initialValue != null && booleanInitialValue !== previousInitialValue) {
      setChecked(booleanInitialValue);
      onValueChange && onValueChange(booleanInitialValue);
    }
  }, [
    initialValue,
    booleanInitialValue,
    previousInitialValue,
    setChecked,
    onValueChange,
  ]);

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
  value = false,
  disabled,
  onValueChange,
  activeTrackColor,
  inactiveTrackColor,
  activeThumbColor,
  inactiveThumbColor,
  theme,
  ...rest
}: Props & RowProps) {
  const [checked, setChecked] = React.useState(value);

  React.useEffect(() => {
    if (value !== checked) {
      setChecked(value);
    }
  }, [value, checked]);

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
