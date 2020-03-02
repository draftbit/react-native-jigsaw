import * as React from "react"
import { Animated, StyleSheet } from "react-native"
import shadow from "../styles/shadow"
import { withTheme } from "../core/theming"

class Elevation extends React.Component {
  render() {
    const { style, theme, ...rest } = this.props
    const flattenedStyles = StyleSheet.flatten(style) || {}
    const { elevation } = flattenedStyles

    return <Animated.View {...rest} style={[elevation && shadow(elevation, theme), style]} />
  }
}

export default withTheme(Elevation)
