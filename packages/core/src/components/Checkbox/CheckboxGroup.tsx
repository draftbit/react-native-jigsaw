import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  createTextProp,
  PROP_TYPES,
  createFieldNameProp,
  createDirectionProp,
} from "@draftbit/types";
import type { Theme } from "../../styles/DefaultTheme";
import { checkboxGroupContext, Direction } from "./context";

export interface CheckboxGroupProps {
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
  values: string[];
  onValueChange: (value: string, selected: boolean) => void;
  theme: Theme;
  children: React.ReactNode;
}

const { Provider } = checkboxGroupContext;

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

export const SEED_DATA = {
  name: "Checkbox Group",
  tag: "CheckboxGroup",
  category: COMPONENT_TYPES.deprecated,
  layout: {},
  triggers: ["ON_VALUE_CHANGE"],
  props: {
    direction: createDirectionProp(),
    values: createTextProp({
      group: GROUPS.data,
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.ARRAY,
      label: "Values",
      description: "Currently selected values of the checkbox group",
      required: true,
      defaultValue: null,
    }),
    fieldName: createFieldNameProp({
      defaultValue: "checkboxGroupValue",
      handlerPropName: "onValueChange",
      valuePropName: "checkboxGroupValue",
    }),
  },
};
