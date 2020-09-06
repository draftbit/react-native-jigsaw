import React, { useState } from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import Text from "./Text";
import RadioButtonFieldRow from "./RadioButtonFieldRow";
import Divider from "./Divider";

interface RadioButtonOption {
  key: string;
  value: string;
}

interface Props {
  options: RadioButtonOption[];
  label?: string;
  onSelect?: (value: string) => void;
  value?: string;
  radioButtonColor?: string;
  labelColor?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  itemBackgroundColor?: string;
  itemStyle?: StyleProp<ViewStyle>;
  itemLabelStyle?: StyleProp<TextStyle>;
}

const RadioButtonFieldGroup: React.FC<Props> = ({
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
}) => {
  let initValue = "";
  if (value) {
    initValue = value;
  } else if (options.length > 0) {
    initValue = options[0].value;
  }
  const [selected, setSelected] = useState(initValue);

  return (
    <View style={[{ backgroundColor }, style]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {options.map((item) => {
        return (
          <View key={item.key}>
            <RadioButtonFieldRow
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
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "#000",
  },
});
export default RadioButtonFieldGroup;
