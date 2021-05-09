import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import RadioButton, {
  SEED_DATA as RADIO_BUTTON_SEED_DATA,
  RadioButtonProps,
} from "./RadioButton";
import { View } from "react-native";
import Text from "../Text";
import { useRadioButtonGroupContext } from "./context";
import {
  createTextProp,
  createTextStyle,
  FORM_TYPES,
} from "../../core/component-types";

export interface RadioButtonRowProps extends Omit<RadioButtonProps, "onPress"> {
  label: string | React.ReactNode;
  value: string;
  labelContainerStyle: StyleProp<ViewStyle>;
  radioButtonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
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

const renderLabel = (
  value: string | React.ReactNode,
  labelStyle: StyleProp<TextStyle>
) => {
  if (typeof value === "string") {
    return <Text style={labelStyle}>{value}</Text>;
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
  labelStyle,
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
        {renderLabel(label, labelStyle)}
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

export const SEED_DATA = {
  ...RADIO_BUTTON_SEED_DATA,
  name: "Radio Button Row",
  tag: "RadioButton.Row",
  label: createTextProp({
    label: "Label",
    description: "Label to show with the radio button",
    required: true,
    defaultValue: null,
  }),
  labelStyle: createTextStyle({
    label: "Label Style",
    description: "Change the styles of the label",
    required: false,
  }),
  direction: createTextProp({
    label: "Direction",
    description:
      "Whether the radio button will appear on the left or on the right",
    formType: FORM_TYPES.flatArray,
    defaultValue: "row",
    options: ["row", "row-reverse"],
  }),
  value: createTextProp({
    label: "Value",
    description: "Value of the radio button",
    required: true,
  }),
};

export default RadioButtonRow;
