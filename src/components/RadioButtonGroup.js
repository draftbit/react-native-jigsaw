import * as React from "react";
import { withTheme } from "../core/theming";
import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "../core/component-types";

function RadioButtonGroup({
  direction,
  options,
  activeColor,
  inactiveColor,
  labelStyle,
  iconSize,
  contentColor,
  unselectedContentColor,
  borderRadius,
  optionSpacing,
  borderColor,
  style,
  value,
  onSelect,
}) {
  const marginHorizontal =
    direction === "horizontal" && optionSpacing ? optionSpacing / 2 : 0;
  const marginVertical =
    direction === "vertical" && optionSpacing ? optionSpacing / 2 : 0;

  const containerStyle = {
    flexDirection: direction === "vertical" ? "column" : "row",
    borderRadius: optionSpacing ? 0 : borderRadius,
    overflow: "hidden",
  };

  if (direction !== "vertical") {
    containerStyle.alignItems = "center";
  }

  return (
    <View style={containerStyle}>
      {options.map((option, index) => {
        const selected = option.label === value;
        return (
          <Touchable
            key={index}
            onPress={() => onSelect(option.label)}
            style={{ flex: 1 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: selected ? activeColor : inactiveColor,
                height: style && style.height ? style.height : 50,
                borderLeftWidth:
                  borderColor && index !== 0 ? StyleSheet.hairlineWidth : 0,
                borderRightWidth:
                  borderColor && index !== options.length - 1
                    ? StyleSheet.hairlineWidth
                    : 0,
                borderColor,
                borderRadius: optionSpacing ? borderRadius : 0,
                marginLeft: marginHorizontal,
                marginRight: marginHorizontal,
                marginTop: marginVertical,
                marginBottom: marginVertical,
              }}
            >
              {option.icon ? (
                <Icon
                  name={option.icon}
                  size={iconSize}
                  color={selected ? contentColor : unselectedContentColor}
                />
              ) : null}
              {option.label ? (
                <Text
                  style={[
                    labelStyle,
                    { color: selected ? contentColor : unselectedContentColor },
                  ]}
                >
                  {option.label}
                </Text>
              ) : null}
            </View>
          </Touchable>
        );
      })}
    </View>
  );
}

RadioButtonGroup.defaultProps = {
  options: [],
};

export default withTheme(RadioButtonGroup);

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.button,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
    options: {
      label: "Options",
      description: "Options for the button group.",
      formType: FORM_TYPES.arrayInput,
      defaultValue: [],
      editable: true,
      required: true,
    },
    direction: {
      label: "Horizontal/Vertical",
      description: "Whether the buttons should be Horizontal or Vertical",
      formType: FORM_TYPES.flatArray,
      defaultValue: "horizontal",
      options: ["horizontal", "vertical"],
      editable: true,
      required: true,
    },
    activeColor: {
      label: "Active Color",
      description: "Color of the button when it's selected",
      defaultValue: null,
      formType: FORM_TYPES.color,
      editable: true,
      required: true,
    },
    inactiveColor: {
      label: "Inactive Color",
      description: "Color of the button when it's selected not selected",
      defaultValue: null,
      formType: FORM_TYPES.color,
      editable: true,
      required: true,
    },
    contentColor: {
      label: "Selected Content Color",
      description: "Color of the content(Icon and Label)",
      defaultValue: null,
      formType: FORM_TYPES.color,
      editable: true,
      required: true,
    },
    unselectedContentColor: {
      label: "Unselected Content Color",
      description: "Unfinished Color of the content(Icon and Label)",
      defaultValue: null,
      formType: FORM_TYPES.color,
      editable: true,
      required: true,
    },
    borderColor: {
      label: "Border Color",
      description: "Border color of the option",
      defaultValue: null,
      formType: FORM_TYPES.color,
      editable: true,
      required: true,
    },
    labelStyle: {
      label: "Label Style",
      description: "Font and weight of the Label",
      formType: FORM_TYPES.typeStyle,
      defaultValue: "Button",
      editable: true,
      required: true,
    },
    optionSpacing: {
      label: "Option Spacing",
      description: "The spacing between each option",
      formType: FORM_TYPES.number,
      defaultValue: 1,
      min: 0,
      max: 20,
      step: 1,
      precision: 1,
      editable: true,
      required: false,
    },
    borderRadius: {
      label: "Border Radius",
      description: "The border radius for the container or options",
      formType: FORM_TYPES.number,
      defaultValue: 0,
      min: 0,
      max: 100,
      step: 1,
      precision: 1,
      editable: true,
      required: false,
    },
    iconSize: {
      label: "Icon Size",
      description: "The size of the icon if enabled",
      formType: FORM_TYPES.number,
      defaultValue: 0,
      min: 0,
      max: 50,
      step: 1,
      precision: 1,
      editable: true,
      required: false,
    },
    fieldName: {
      ...FIELD_NAME,
      defaultValue: "radioButtonValue",
      handlerPropName: "onSelect",
    },
  },
  layout: {},
};
