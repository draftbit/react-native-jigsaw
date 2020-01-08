/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import { View, Text, StyleSheet } from "react-native"
import Icon from "./Icon.js"
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../core/component-types"
import Touchable from "./Touchable"

type Props = {
  style: object,
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
  unselectedContentColor: string,
  theme: theme
}

class RadioButtonGroup extends React.Component<Props> {
  state = { selected: this.props.defaultSelection }

  onPress = selected => {
    const { controlled, onChange } = this.props
    if (onChange) {
      onChange(selected)
    }

    if (!controlled) {
      return this.setState({ selected })
    }
  }

  getSelected = () => {
    if (this.props.controlled) {
      return this.props.value
    }

    return this.state.selected
  }

  render() {
    const {
      style,
      direction,
      options,
      activeColor,
      inactiveColor,
      labelStyle,
      labelWrapperStyle,
      iconSize,
      contentColor,
      borderRadius,
      optionSpacing,
      borderColor,
      controlled,
      unselectedContentColor,
      theme: { colors, spacing, typography }
    } = this.props
    const marginHorizontal = direction === "horizontal" && optionSpacing ? optionSpacing / 2 : 0
    const marginVertical = direction === "vertical" && optionSpacing ? optionSpacing / 2 : 0
    const optionWrapperWidth = direction === "vertical" ? "100%" : "auto"

    return (
      <View
        style={[
          style,
          {
            flexDirection: direction === "vertical" ? "column" : "row",
            alignItems: "center",
            borderRadius: optionSpacing ? 0 : borderRadius,
            overflow: "hidden"
          }
        ]}>
        {options.map((option, index) => {
          const selected = option.label == this.getSelected()
          return (
            <Touchable
              key={option.key || index}
              style={{ width: optionWrapperWidth }}
              onPress={() => this.onPress(option.label)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selected ? activeColor : inactiveColor,
                  borderLeftWidth: borderColor && index !== 0 ? StyleSheet.hairlineWidth : 0,
                  borderRightWidth:
                    borderColor && index !== options.length - 1 ? StyleSheet.hairlineWidth : 0,
                  borderColor,
                  borderRadius: optionSpacing ? borderRadius : 0,
                  marginLeft: marginHorizontal,
                  marginRight: marginHorizontal,
                  marginTop: marginVertical,
                  marginBottom: marginVertical,
                  padding: spacing.large,
                  ...labelWrapperStyle
                }}>
                {option.icon ? (
                  <Icon name={option.icon} size={iconSize} color={contentColor} />
                ) : null}
                {option.label ? (
                  <Text
                    style={[
                      typography.button,
                      labelStyle,
                      { color: selected ? contentColor : unselectedContentColor }
                    ]}>
                    {option.label}
                  </Text>
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
  category: COMPONENT_TYPES.button,
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
    inactiveColor: {
      label: "Inactive Color",
      description: "Color of the button when it's selected not selected",
      value: null,
      type: FORM_TYPES.color,
      editable: true,
      required: true
    },
    contentColor: {
      label: "Selected Content Color",
      description: "Color of the content(Icon and Label)",
      value: null,
      type: FORM_TYPES.color,
      editable: true,
      required: true
    },
    unselectedContentColor: {
      label: "Unselected Content Color",
      description: "Unfinished Color of the content(Icon and Label)",
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
      value: "Button",
      editable: true,
      required: true
    },
    optionSpacing: {
      label: "Option Spacing",
      description: "The spacing between each option",
      type: FORM_TYPES.number,
      value: 1,
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
    },
    fieldName: FIELD_NAME
  },
  layout: {}
}
