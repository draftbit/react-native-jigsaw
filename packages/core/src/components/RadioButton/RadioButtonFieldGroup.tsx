import React from "react";
import { View, StyleProp, TextStyle, ViewStyle } from "react-native";
import Text from "../Text";
import { withTheme } from "../../theming";
import RadioButtonGroup, { RadioButtonGroupProps } from "./RadioButtonGroup";

interface Props extends RadioButtonGroupProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const RadioButtonFieldGroup: React.FC<Props> = ({
  label,
  children,
  theme,
  labelStyle,
  style,
  ...rest
}) => {
  return (
    <View style={style}>
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
      <RadioButtonGroup theme={theme} {...rest}>
        {children}
      </RadioButtonGroup>
    </View>
  );
};

export default withTheme(RadioButtonFieldGroup);
