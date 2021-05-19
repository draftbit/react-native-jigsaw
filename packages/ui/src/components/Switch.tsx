import * as React from "react";
import { Switch as NativeSwitch, Platform, SwitchProps } from "react-native";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
} from "@draftbit/types";
import themeT from "../styles/DefaultTheme";

type Props = {
  value: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
  color?: string;
  theme: typeof themeT;
} & SwitchProps;

const Switch: React.FC<Props> = ({
  value = false,
  disabled,
  onValueChange,
  color,
  theme,
  style,
  ...props
}) => {
  let [checked, setChecked] = React.useState(value);
  let thumbColor = "#FFF";
  const checkedColor = color || theme.colors.primary;
  const uncheckedColor = "#ddd";

  React.useEffect(() => {
    if (value !== checked) {
      setChecked(value);
    }
  }, [value, checked]);

  return (
    <NativeSwitch
      {...props}
      value={checked}
      disabled={disabled}
      trackColor={{ false: uncheckedColor, true: checkedColor }}
      thumbColor={thumbColor}
      onValueChange={(boolValue) => {
        if (!disabled) {
          setChecked(boolValue);
          onValueChange && onValueChange(boolValue);
        }
      }}
      style={[
        {
          opacity:
            disabled && Platform.OS !== "ios" ? theme.disabledOpacity : 1,
        },
        style,
      ]}
    />
  );
};

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
    }),
    value: createBoolProp({
      label: "Value",
      description: "Boolean value",
    }),
    color: createColorProp(),
  },
};
