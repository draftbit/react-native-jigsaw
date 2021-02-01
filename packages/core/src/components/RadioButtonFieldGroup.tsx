import React, { useState } from "react";
import { View, StyleProp, ViewStyle, TextStyle } from "react-native";
import Text from "./Text";
import RadioButtonFieldRow from "./RadioButtonFieldRow";
import Divider from "./Divider";
import themeT from "../styles/DefaultTheme";
import { withTheme } from "../theming";
import { colorTypes } from "@draftbit/types";
import type { IconSlot } from "../interfaces/Icon";

export interface RadioButtonOption {
  key: string;
  value: string;
}

type Props = {
  options: RadioButtonOption[];
  label?: string;
  onSelect?: (value: string) => void;
  value?: string;
  radioButtonColor?: colorTypes;
  labelColor?: colorTypes;
  backgroundColor?: colorTypes;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  itemBackgroundColor?: colorTypes;
  itemStyle?: StyleProp<ViewStyle>;
  itemLabelStyle?: StyleProp<TextStyle>;
  theme: typeof themeT;
} & IconSlot;

const RadioButtonFieldGroup: React.FC<Props> = ({
  Icon,
  options,
  label,
  onSelect = () => {},
  value,
  radioButtonColor,
  labelColor,
  backgroundColor,
  style,
  labelStyle,
  itemStyle,
  itemLabelStyle,
  itemBackgroundColor,
  theme,
}) => {
  const [selected, setSelected] = useState("");

  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor
            ? theme.colors[backgroundColor]
            : undefined,
        },
        style,
      ]}
    >
      <Text
        style={[
          {
            fontSize: theme.typography.headline4.fontSize,
            color: theme.typography.headline4.color,
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>
      {options.map((item) => {
        return (
          <View key={item.key}>
            <RadioButtonFieldRow
              Icon={Icon}
              style={[itemStyle]}
              labelStyle={[itemLabelStyle]}
              selected={value ? value === item.value : selected === item.value}
              label={item.value}
              radioButtonColor={radioButtonColor}
              labelColor={labelColor}
              backgroundColor={itemBackgroundColor}
              onPress={() => {
                if (selected !== item.value) {
                  setSelected(item.value);
                  onSelect(item.value);
                }
              }}
            />
            <Divider />
          </View>
        );
      })}
    </View>
  );
};

export default withTheme(RadioButtonFieldGroup);
