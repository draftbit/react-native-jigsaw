import * as React from "react"
import { withTheme } from "../core/theming"
import { View, Text, StyleSheet } from "react-native"
import Icon from "./Icon.web.js"
import Touchable from "./Touchable"

class RadioButtonGroup extends React.Component {
  static defaultProps = { options: [] }
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

    const marginHorizontal = direction === "horizontal" && optionSpacing ? optionSpacing / 2 : 0
    const marginVertical = direction === "vertical" && optionSpacing ? optionSpacing / 2 : 0

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
            <Touchable onPress={() => this.onPress(option.label)} style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: selected ? activeColor : inactiveColor,
                  height: style && style.height ? style.height : 50,
                  borderLeftWidth: borderColor && index !== 0 ? StyleSheet.hairlineWidth : 0,
                  borderRightWidth:
                    borderColor && index !== options.length - 1 ? StyleSheet.hairlineWidth : 0,
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
