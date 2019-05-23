/* @flow */

import * as React from "react"
import { View, Picker as NativePicker, StyleSheet } from "react-native"
import { withTheme } from "../../core/theming"
import type { Theme } from "../../types"
import TextField from "../TextField"
import Touchable from "../Touchable"

class Picker extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.textField = React.createRef()
  }

  onValueChange = (itemValue, itemIndex) => {
    this.toggleFocus()
    this.props.onValueChange(itemValue, itemIndex)
  }

  toggleFocus = () => {
    const { disabled } = this.props

    if (!disabled) {
      this.textField.current.toggleFocus()
    }
  }

  render() {
    const { style, options, placeholder, selectedValue, disabled, ...props } = this.props

    return (
      <Touchable disabled={disabled} onPress={this.toggleFocus} style={[styles.container, style]}>
        <View>
          <NativePicker
            enabled={!disabled}
            selectedValue={selectedValue}
            onValueChange={this.onValueChange}
            style={{
              opacity: 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}>
            {options.map(o => (
              <NativePicker.Item label={o.label} value={o.value} key={o.value} />
            ))}
          </NativePicker>
          <View pointerEvents="none">
            <TextField
              {...props}
              value={selectedValue}
              placeholder={placeholder}
              ref={this.textField}
              disabled={disabled}
            />
          </View>
        </View>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  }
})

export default withTheme(Picker)
