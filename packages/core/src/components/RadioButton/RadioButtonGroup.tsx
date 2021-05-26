import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
  createTextProp,
} from "@draftbit/types";
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
    <View style={style} {...rest}>
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
  category: COMPONENT_TYPES.button,
  layout: {
    minHeight: 40,
  },
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
};
