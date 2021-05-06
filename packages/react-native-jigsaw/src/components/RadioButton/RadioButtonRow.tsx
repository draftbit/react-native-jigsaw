import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import RadioButton, { RadioButtonProps } from "./RadioButton";
import { View } from "react-native";
import Text from "../Text";
import { useRadioButtonGroupContext } from "./context";

export interface RadioButtonRowProps extends Omit<RadioButtonProps, "onPress"> {
  label: string | React.ReactNode;
  value: string;
  labelContainerStyle: StyleProp<ViewStyle>;
  radioButtonStyle?: StyleProp<ViewStyle>;
  onPress?: (value: string) => void;
  direction?: "row" | "row-reverse";
}

const getRadioButtonAlignment = (
  parentDirection: string,
  direction: string
) => {
  if (parentDirection === "horizontal") {
    return direction === "row" ? "flex-start" : "flex-end";
  } else if (direction === "row-reverse") {
    return "flex-start";
  } else {
    return "flex-end";
  }
};

const renderLabel = (value: string | React.ReactNode) => {
  if (typeof value === "string") {
    return <Text>{value}</Text>;
  } else {
    return <>{value}</>;
  }
};

const RadioButtonRow: React.FC<RadioButtonRowProps> = ({
  label,
  value,
  onPress = () => {},
  style,
  selected,
  labelContainerStyle,
  radioButtonStyle,
  direction = "row",
  ...other
}) => {
  const {
    value: contextValue,
    onValueChange,
    direction: parentDirection,
  } = useRadioButtonGroupContext();

  const handlePress = () => {
    onPress(value);
    onValueChange(value);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.mainParent, { flexDirection: direction }, style]}
    >
      <View
        style={[
          styles.label,
          {
            alignItems: direction === "row" ? "flex-start" : "flex-end",
          },
          labelContainerStyle,
        ]}
      >
        {renderLabel(label)}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: getRadioButtonAlignment(parentDirection, direction),
        }}
      >
        <RadioButton
          selected={contextValue === value}
          onPress={handlePress}
          style={radioButtonStyle}
          {...other}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainParent: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingStart: 20,
    minHeight: 50,
    paddingEnd: 20,
    flex: 1,
  },
  label: {
    flex: 3,
  },
});

export default RadioButtonRow;
