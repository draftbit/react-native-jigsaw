/* @flow */
import * as React from "react"
import { Animated, View, StyleSheet } from "react-native"
import color from "color"
import Icon from "./Icon"
import Touchable from "./Touchable"
import { withTheme } from "../core/theming"
import type { Theme, $RemoveChildren } from "../types"

type Props = $RemoveChildren<typeof TouchableRipple> & {|
  /**
   * Status of checkbox.
   */
  status: "checked" | "unchecked" | "indeterminate",
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * Custom color for unchecked checkbox.
   */
  uncheckedColor?: string,
  /**
   * Custom color for checkbox.
   */
  color?: string,
  /**
   * @optional
   */
  theme: Theme
|}

type State = {
  scaleAnim: Animated.Value
}

class CheckboxAndroid extends React.Component<Props, State> {
  static displayName = "Checkbox.Android"

  state = {
    scaleAnim: new Animated.Value(1)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status === this.props.status) {
      return
    }

    const checked = this.props.status === "checked"
    Animated.sequence([
      Animated.timing(this.state.scaleAnim, {
        toValue: 0.85,
        duration: checked ? 200 : 0
      }),
      Animated.timing(this.state.scaleAnim, {
        toValue: 1,
        duration: checked ? 200 : 350
      })
    ]).start()
  }

  render() {
    const { status, disabled, onPress, theme, ...rest } = this.props
    const checked = status === "checked"
    const indeterminate = status === "indeterminate"
    const uncheckedColor = theme.colors.light
    const checkedColor = this.props.color || theme.colors.primary
    const checkboxColor = checked ? checkedColor : uncheckedColor
    const rippleColor = checkedColor

    const borderWidth = this.state.scaleAnim.interpolate({
      inputRange: [0.8, 1],
      outputRange: [7, 0]
    })

    const icon = indeterminate
      ? "MaterialIcons/indeterminate-check-box"
      : checked
      ? "MaterialIcons/check-box"
      : "MaterialIcons/check-box-outline-blank"
    return (
      <Touchable
        {...rest}
        borderless={true}
        rippleColor={rippleColor}
        onPress={onPress}
        disabled={disabled}
        accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityStates={disabled ? ["disabled"] : undefined}
        accessibilityLiveRegion="polite"
        style={{ borderRadius: 18, width: 30, height: 30, opacity: disabled ? 0.5 : 1 }}>
        <Animated.View style={{ transform: [{ scale: this.state.scaleAnim }] }}>
          <Icon allowFontScaling={false} name={icon} size={29} color={checkboxColor} />
          <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
            <Animated.View style={[styles.fill, { borderColor: checkboxColor }, { borderWidth }]} />
          </View>
        </Animated.View>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    width: 30,
    height: 30
  },
  fillContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  fill: {
    height: 30,
    width: 30
  }
})

export default withTheme(CheckboxAndroid)
