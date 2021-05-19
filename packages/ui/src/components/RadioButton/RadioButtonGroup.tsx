import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
  createTextProp,
} from "../../core/component-types";
import type { Theme } from "../../styles/DefaultTheme";
import { radioButtonGroupContext, Direction } from "./context";
export interface RadioButtonGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  value: string;
  onValueChange: (value: string) => void;
  theme: Theme;
  children: React.ReactNode;
}

const { Provider } = radioButtonGroupContext;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  direction = Direction.Horizontal,
  value,
  onValueChange = () => {},
  style,
  children,
}) => {
  const _containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: direction === Direction.Horizontal ? "row" : "column",
      overflow: "hidden",
    },
    style,
  ];

  if (direction !== Direction.Vertical) {
    _containerStyle.push({
      alignItems: "center",
    });
  }

  return (
    <Provider value={{ value, onValueChange, direction }}>
      <View style={_containerStyle}>{children}</View>
    </Provider>
  );
};

export default RadioButtonGroup;

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.button,
  props: {
    direction: createTextProp({
      label: "Horizontal/Vertical",
      description: "Whether the buttons should be Horizontal or Vertical",
      formType: FORM_TYPES.flatArray,
      defaultValue: "horizontal",
      options: ["horizontal", "vertical"],
    }),
    value: createTextProp({
      label: "value",
      description: "Currently selected value of the radio button group",
      required: true,
    }),
    fieldName: {
      ...FIELD_NAME,
      handlerPropName: "onValueChange",
    },
  },
  layout: {},
};
