import * as React from "react";
import { Switch as NativeSwitch, Platform, SwitchProps } from "react-native";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  createStateValue,
  createBoolProp,
  createColorProp,
} from "../core/component-types";
import themeT from "../styles/DefaultTheme";

type Props = {
  value: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
  color?: string;
  theme: typeof themeT;
} & SwitchProps;

const Switch: React.FC<Props> = ({
  value,
  disabled,
  onValueChange,
  color,
  theme,
  style,
  ...props
}) => {
  let thumbColor;
  let checkedColor = color || theme.colors.primary;
  if (Platform.OS !== "ios") {
    thumbColor = theme.colors.surface;
  }
  return (
    <NativeSwitch
      {...props}
      value={value}
      disabled={disabled}
      trackColor={{ false: "", true: checkedColor }}
      //@ts-ignore
      activeTrackColor={checkedColor}
      activeThumbColor={thumbColor}
      thumbColor={thumbColor}
      onValueChange={disabled ? undefined : onValueChange}
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
    color: createColorProp(),
    fieldName: createStateValue({
      defaultValue: "enabled",
      handlerPropName: "onValueChange",
    }),
  },
};
