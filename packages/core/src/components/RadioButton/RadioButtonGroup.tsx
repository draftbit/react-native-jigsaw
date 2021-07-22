import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  COMPONENT_TYPES,
  createFieldNameProp,
  createDirectionProp,
} from "@draftbit/types";
import type { Theme } from "../../styles/DefaultTheme";
import { radioButtonGroupContext, Direction } from "./context";
import { usePrevious } from "../../hooks";
export interface RadioButtonGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  value: string;
  onValueChange: (value: string) => void;
  initialValue?: string;
  theme: Theme;
  children: React.ReactNode;
}

const { Provider } = radioButtonGroupContext;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  direction = Direction.Vertical,
  value,
  onValueChange = () => {},
  initialValue,
  style,
  children,
  ...rest
}) => {
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
      <Provider value={{ value, onValueChange, direction }}>
        <View style={_containerStyle}>{children}</View>
      </Provider>
    </View>
  );
};

export default RadioButtonGroup;

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.input,
  layout: {},
  props: {
    direction: createDirectionProp(),
    fieldName: createFieldNameProp({
      handlerPropName: "onValueChange",
      valuePropName: "value",
      defaultValue: "radioButtonGroupValue",
    }),
  },
};
