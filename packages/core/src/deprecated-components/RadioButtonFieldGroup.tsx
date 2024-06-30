import React from "react";
import { View, StyleProp, TextStyle, ViewStyle } from "react-native";
import Text from "../components/Text";
import { withTheme } from "@draftbit/theme";
import RadioButtonGroup, {
  RadioButtonGroupProps,
} from "../components/RadioButton/RadioButtonGroup";

interface Props extends RadioButtonGroupProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

/**
 * @deprecated DEPRECATED
 */
const RadioButtonFieldGroup: React.FC<React.PropsWithChildren<Props>> = ({
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
