import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
  createTextProp,
  createTextStyle,
} from "../../core/component-types";
import themeT from "../../styles/DefaultTheme";
import { radioButtonGroupContext } from "./context";

export interface RadioButtonGroupProps {
  direction?: "horizontal" | "vertical";
  style?: StyleProp<ViewStyle>;
  value: string;
  onValueChange?: (value: string) => void;
  theme: typeof themeT;
  children: React.ReactNode;
}

const { Provider } = radioButtonGroupContext;

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  direction = "horizontal",
  value,
  onValueChange = () => {},
  style,
  children,
}) => {
  const _containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: direction === "vertical" ? "column" : "row",
      overflow: "hidden",
    },
    style,
  ];

  if (direction !== "vertical") {
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
  tag: "RadioButton.Group",
  category: COMPONENT_TYPES.button,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
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
