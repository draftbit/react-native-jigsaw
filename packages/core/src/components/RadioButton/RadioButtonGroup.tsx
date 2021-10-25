import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { radioButtonGroupContext, Direction } from "./context";
import { usePrevious } from "../../hooks";
export interface RadioButtonGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  value?: string;
  onValueChange: (value: string) => void;
  initialValue?: string; // deprecated
  defaultValue?: string;
  theme: Theme;
  children: React.ReactNode;
}

const { Provider } = radioButtonGroupContext;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  direction = Direction.Vertical,
  value,
  onValueChange = () => {},
  initialValue,
  defaultValue,
  style,
  children,
  ...rest
}) => {
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value || defaultValue
  );

  React.useEffect(() => {
    if (value != null) {
      setInternalValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onValueChange(initialValue);
    }
  }, [initialValue, previousInitialValue, onValueChange]);

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
          value: internalValue || "",
          onValueChange: setInternalValue,
          direction,
        }}
      >
        <View style={_containerStyle}>{children}</View>
      </Provider>
    </View>
  );
};

export default RadioButtonGroup;
