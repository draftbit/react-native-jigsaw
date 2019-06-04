/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import { View, Text } from "react-native"
import Icon from "./Icon.js"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"
import Touchable from "./Touchable"

type Props = {
  style: style,
  direction: string,
  options: Array<{ id: number, icon: string, label: string }>,
  activeColor: string,
  inactiveColor: string,
  labelStyle: object,
  iconSize: number,
  contentColor: string,
  borderRadius: number,
  optionSpacing: number,
  borderColor: string,
  theme: theme
}

class RadioButtonGroup extends React.Component<Props> {
  state = { selected: this.props.defaultSelection }

  onPress = selected => {
    this.setState({ selected })
  }

  render() {
    const {
      style,
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
      theme: { colors }
    } = this.props

    const optionWidth = style.width / options.length
    const marginHorizontal = direction === "horizontal" ? optionSpacing / 2 : 0
    const marginVertical = direction === "vertical" ? optionSpacing / 2 : 0

    return (
      <View
        style={{
          flexDirection: direction === "vertical" ? "column" : "row",
          alignItems: "center",
          borderRadius: optionSpacing ? 0 : borderRadius,
          overflow: "hidden"
        }}>
        {options.map((option, index) => {
          const selected = option.label == this.state.selected
          return (
            <Touchable onPress={() => this.onPress(option.label)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selected ? activeColor : inactiveColor,
                  height: style.height,
                  width: optionWidth,
                  borderLeftWidth: borderColor && index !== 0 ? 0.5 : 0,
                  borderRightWidth: borderColor && index !== options.length - 1 ? 0.5 : 0,
                  borderColor,
                  borderRadius: optionSpacing ? borderRadius : 0,
                  marginLeft: marginHorizontal,
                  marginRight: marginHorizontal,
                  marginTop: marginVertical,
                  marginBottom: marginVertical
                }}>
                {option.icon ? (
                  <Icon name={option.icon} size={iconSize} color={contentColor} />
                ) : null}
                {option.label ? (
                  <Text style={[labelStyle, { color: contentColor }]}>{option.label}</Text>
                ) : null}
              </View>
            </Touchable>
          )
        })}
      </View>
    )
  }
}

export default withTheme(RadioButtonGroup)

export const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: COMPONENT_TYPES.formControl,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
    options: {
      label: "Options",
      description: "Options for the button group.",
      type: FORM_TYPES.arrayInput,
      value: [],
      editable: true,
      required: true
    },
    direction: {
      label: "Horizontal/Vertical",
      description: "Whether the buttons should be Horizontal or Vertical",
      type: FORM_TYPES.flatArray,
      value: "horizontal",
      options: ["horizontal", "vertical"],
      editable: true,
      required: true
    },
    activeColor: {
      label: "Active Color",
      description: "Color of the button when it's selected",
      value: null,
      type: FORM_TYPES.color,
      editable: true,
      required: true
    },
    inactivecolor: {
      label: "Inactive Color",
      description: "Color of the button when it's selected not selected",
      value: null,
      type: FORM_TYPES.color,
      editable: true,
      required: true
    },
    contentColor: {
      label: "Content Color",
      description: "Color of the content(Icon and Label)",
      value: null,
      type: FORM_TYPES.color,
      editable: true,
      required: true
    },
    borderColor: {
      label: "Border Color",
      description: "Border color of the option",
      value: null,
      type: FORM_TYPES.color,
      editable: true,
      required: true
    },
    labelStyle: {
      label: "Label Style",
      description: "Font and weight of the Label",
      type: FORM_TYPES.typeStyle,
      value: null,
      editable: true,
      required: true
    },
    optionSpacing: {
      label: "Option Spacing",
      description: "The spacing between each option",
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      max: 20,
      step: 1,
      precision: 1,
      editable: true,
      required: false
    },
    borderRadius: {
      label: "Border Radius",
      description: "The border radius for the container or options",
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      max: 100,
      step: 1,
      precision: 1,
      editable: true,
      required: false
    },
    iconSize: {
      label: "Icon Size",
      description: "The size of the icon if enabled",
      type: FORM_TYPES.number,
      value: 0,
      min: 0,
      max: 50,
      step: 1,
      precision: 1,
      editable: true,
      required: false
    }
  },
  layout: {
    width: 200,
    height: 40
  }
}
