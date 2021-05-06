import React from "react";
import { View, StyleProp, TextStyle } from "react-native";
import Text from "../Text";
import { withTheme } from "../../core/theming";
import { RadioButtonGroupProps } from "./RadioButtonGroup";
import RadioButton from ".";

interface Props extends RadioButtonGroupProps {
  label?: string;
  labelStyle: StyleProp<TextStyle>;
}

const RadioButtonFieldGroup: React.FC<Props> = ({
  label,
  children,
  theme,
  labelStyle,
  ...other
}) => {
  return (
    <View>
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
      <RadioButton.Group theme={theme} {...other}>
        {children}
      </RadioButton.Group>
    </View>
  );
};

export default withTheme(RadioButtonFieldGroup);
