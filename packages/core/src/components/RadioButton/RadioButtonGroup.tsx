import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { radioButtonGroupContext, Direction } from "./context";
export interface RadioButtonGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  theme: Theme;
  children: React.ReactNode;
}

const { Provider } = radioButtonGroupContext;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  direction = Direction.Vertical,
  value,
  onValueChange = () => {},
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

  const handleValueChange = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange(newValue);
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
          value: internalValue || "",
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
