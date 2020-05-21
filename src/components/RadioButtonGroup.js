import * as React from "react";
import { withTheme } from "../core/theming";
import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";

function RadioButtonGroup({
  direction,
  options,
  activeColor,
  inactiveColor,
  labelStyle,
  iconSize,
  contentColor,
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
          <Touchable onPress={() => onSelect(option.label)} style={{ flex: 1 }}>
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
                <Icon name={option.icon} size={iconSize} color={contentColor} />
              ) : null}
              {option.label ? (
                <Text style={[labelStyle, { color: contentColor }]}>
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
