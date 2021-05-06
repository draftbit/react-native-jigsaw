import * as React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  PROP_TYPES,
  FIELD_NAME,
} from "../../core/component-types";
import themeT from "../../styles/DefaultTheme";
import { radioButtonGroupContext } from "./context";

export interface RadioButtonGroupProps {
  direction?: "horizontal" | "vertical";
  optionSpacing?: number;
  containerStyle?: StyleProp<ViewStyle>;
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
  containerStyle,
  children,
}) => {
  const _containerStyle: StyleProp<ViewStyle> = [
    {
      flexDirection: direction === "vertical" ? "column" : "row",
      overflow: "hidden",
    },
    containerStyle,
  ];

  if (direction !== "vertical") {
    _containerStyle.push({
      alignItems: "center",
    });
  }

  return (
    <Provider value={{ value, onValueChange }}>
      <View style={_containerStyle}>{children}</View>
    </Provider>
  );
};

export default RadioButtonGroup;

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.button,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
    options: {
      group: GROUPS.data,
      label: "Options",
      description: "Options for the button group.",
      formType: FORM_TYPES.array,
      propType: PROP_TYPES.OBJECT,
      options: [
        { icon: "", label: "One" },
        { icon: "", label: "Two" },
        { icon: "", label: "Three" },
      ],
      defaultValue: [
        { icon: "", label: "One" },
        { icon: "", label: "Two" },
        { icon: "", label: "Three" },
      ],
      editable: true,
      required: true,
    },
    direction: {
      group: GROUPS.basic,
      label: "Horizontal/Vertical",
      description: "Whether the buttons should be Horizontal or Vertical",
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "horizontal",
      options: ["horizontal", "vertical"],
      editable: true,
      required: true,
    },
    activeColor: {
      group: GROUPS.basic,
      label: "Active Color",
      description: "Color of the button when it's selected",
      defaultValue: "primary",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    inactiveColor: {
      group: GROUPS.basic,
      label: "Inactive Color",
      description: "Color of the button when it's selected not selected",
      defaultValue: "divider",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    contentColor: {
      group: GROUPS.basic,
      label: "Selected Content Color",
      description: "Color of the content(Icon and Label)",
      defaultValue: "surface",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    unselectedContentColor: {
      group: GROUPS.basic,
      label: "Unselected Content Color",
      description: "Unfinished Color of the content(Icon and Label)",
      defaultValue: "strong",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    borderColor: {
      group: GROUPS.basic,
      label: "Border Color",
      description: "Border color of the option",
      defaultValue: "light",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: true,
    },
    labelStyle: {
      group: GROUPS.basic,
      label: "Label Style",
      description: "Font and weight of the Label",
      formType: FORM_TYPES.typeStyle,
      propType: PROP_TYPES.THEME,
      defaultValue: "Button",
      editable: true,
      required: true,
    },
    optionSpacing: {
      group: GROUPS.basic,
      label: "Option Spacing",
      description: "The spacing between each option",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 1,
      min: 0,
      max: 20,
      step: 1,
      precision: 1,
      editable: true,
      required: false,
    },
    borderRadius: {
      group: GROUPS.basic,
      label: "Border Radius",
      description: "The border radius for the container or options",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 10,
      min: 0,
      max: 100,
      step: 1,
      precision: 1,
      editable: true,
      required: false,
    },
    iconSize: {
      group: GROUPS.basic,
      label: "Icon Size",
      description: "The size of the icon if enabled",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      defaultValue: 16,
      min: 0,
      max: 24,
      step: 1,
      precision: 1,
      editable: true,
      required: false,
    },
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "radioButtonValue",
      handlerPropName: "onValueChange",
    },
  },
  layout: {},
};
