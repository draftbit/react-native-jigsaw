import * as React from "react";
import {
  Switch as NativeSwitch,
  SwitchProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { withTheme } from "../theming";
import FormRow from "./FormRow";
import {
  COMPONENT_TYPES,
  GROUPS,
  createBoolProp,
  createColorProp,
  createFieldNameProp,
  createTextProp,
  createRowDirectionProp,
  RowDirection,
  Triggers,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import { usePrevious } from "../hooks";

type Props = {
  value: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
  initialValue?: boolean;
  theme: Theme;
  activeTrackColor: string;
  inactiveTrackColor: string;
  activeThumbColor: string;
  inactiveThumbColor: string;
} & SwitchProps;

function Switch({
  value = false,
  initialValue,
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

  const [checked, setChecked] = React.useState(value);
  React.useEffect(() => {
    if (value !== checked) {
      setChecked(value);
    }
  }, [value, checked]);

  const booleanInitialValue = Boolean(initialValue);
  const previousInitialValue = usePrevious(booleanInitialValue);
  React.useEffect(() => {
    if (booleanInitialValue !== previousInitialValue) {
      setChecked(booleanInitialValue);
      onValueChange && onValueChange(booleanInitialValue);
    }
  }, [booleanInitialValue, previousInitialValue, setChecked, onValueChange]);

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

const SEED_DATA_TRIGGERS = [Triggers.OnValueChange];
export const SEED_DATA = [
  {
    name: "Switch",
    tag: "Switch",
    category: COMPONENT_TYPES.input,
    layout: {},
    triggers: SEED_DATA_TRIGGERS,
    props: {
      disabled: createBoolProp({
        label: "Disabled",
        description: "Boolean to handle disabling the switch",
      }),
      fieldName: createFieldNameProp({
        handlerPropName: "onValueChange",
        valuePropName: "value",
        defaultValue: "switchValue",
      }),
      activeTrackColor: createColorProp({
        label: "Active Track Color",
      }),
      inactiveTrackColor: createColorProp({
        label: "Inactive Track Color",
      }),
      activeThumbColor: createColorProp({
        label: "Active Thumb Color",
      }),
      inactiveThumbColor: createColorProp({
        label: "Inactive Thumb Color",
      }),
    },
  },
  {
    name: "Switch Row",
    tag: "SwitchRow",
    category: COMPONENT_TYPES.input,
    layout: {},
    triggers: SEED_DATA_TRIGGERS,
    props: {
      label: createTextProp({
        label: "Label",
        description: "Label to show with the checkbox",
        required: true,
        defaultValue: "First Option",
      }),
      direction: createRowDirectionProp(),
      disabled: createBoolProp({
        label: "Disabled",
        description: "Boolean to handle disabling the switch",
        group: GROUPS.data,
      }),
      fieldName: createFieldNameProp({
        handlerPropName: "onValueChange",
        valuePropName: "value",
        defaultValue: "switchValue",
      }),
      activeTrackColor: createColorProp({
        label: "Active Track Color",
      }),
      inactiveTrackColor: createColorProp({
        label: "Inactive Track Color",
      }),
      activeThumbColor: createColorProp({
        label: "Active Thumb Color",
      }),
      inactiveThumbColor: createColorProp({
        label: "Inactive Thumb Color",
      }),
    },
  },
];
