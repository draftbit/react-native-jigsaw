import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import type { ReadTheme } from "@draftbit/theme";
import {
  checkboxGroupContext,
  Direction,
} from "../components/Checkbox/context";

export interface CheckboxGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  values: string[];
  onValueChange: (value: string, selected: boolean) => void;
  theme: ReadTheme;
  children: React.ReactNode;
}

const { Provider } = checkboxGroupContext;

/**
 * @deprecated DEPRECATED
 */
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  direction = Direction.Vertical,
  values,
  onValueChange = () => {},
  style,
  children,
  ...rest
}) => {
  const _containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: direction === Direction.Horizontal ? "row" : "column",
      overflow: "hidden",
    },
  ];

  if (direction !== Direction.Vertical) {
    _containerStyle.push({
      alignItems: "center",
    });
  }

  return (
    <View style={[{ minHeight: 40 }, style]} {...rest}>
      <Provider value={{ values, onValueChange, direction }}>
        <View style={_containerStyle}>{children}</View>
      </Provider>
    </View>
  );
};

export default CheckboxGroup;
