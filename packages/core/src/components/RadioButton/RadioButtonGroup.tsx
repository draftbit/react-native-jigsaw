import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { getValueForRadioButton } from "../../utilities";
import { radioButtonGroupContext, Direction } from "./context";
export interface RadioButtonGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  value: string | number;
  onValueChange?: (value: string) => void;
  defaultValue?: string | number;
  theme: Theme;
  children: React.ReactNode;
}

const { Provider } = radioButtonGroupContext;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  direction = Direction.Vertical,
  value = "",
  onValueChange,
  defaultValue,
  style,
  children,
  ...rest
}) => {
  const [internalValue, setInternalValue] = React.useState("");

  React.useEffect(() => {
    if (value != null) {
      const realValue = getValueForRadioButton(value);

      setInternalValue(realValue);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      const realDefaultValue = getValueForRadioButton(defaultValue);

      setInternalValue(realDefaultValue);
    }
  }, [defaultValue]);

  const handleValueChange = (newValue: string | number) => {
    const realNewValue = getValueForRadioButton(newValue);

    setInternalValue(realNewValue);
    onValueChange?.(realNewValue);
  };

  const _containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: direction === Direction.Horizontal ? "row" : "column",
    },
  ];

  if (direction !== Direction.Vertical) {
    _containerStyle.push({
      alignItems: "center",
    });
  }

  return (
    <View style={[{ minHeight: 40 }, style]} {...rest}>
      <Provider
        value={{
          value: internalValue,
          onValueChange: handleValueChange,
          direction,
        }}
      >
        <View style={_containerStyle}>{children}</View>
      </Provider>
    </View>
  );
};

export default RadioButtonGroup;
