import * as React from "react";
import { Switch as NativeSwitch, SwitchProps } from "react-native";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  GROUPS,
  createBoolProp,
  createColorProp,
  createFieldNameProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";

type Props = {
  value: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
  theme: Theme;
  activeTrackColor: string;
  inactiveTrackColor: string;
  activeThumbColor: string;
  inactiveThumbColor: string;
} & SwitchProps;

function Switch({
  value = false,
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

export default withTheme(Switch);

export const SEED_DATA = {
  name: "Switch",
  tag: "Switch",
  category: COMPONENT_TYPES.basic,
  layout: {},
  props: {
    disabled: createBoolProp({
      label: "Disabled",
      description: "Boolean to handle disabling the switch",
      group: GROUPS.data,
    }),
    value: createBoolProp({
      label: "Value",
      description: "Boolean value",
      group: GROUPS.data,
    }),
    fieldName: createFieldNameProp({
      defaultValue: false,
      valuePropName: "switchValue",
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
};
