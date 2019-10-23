/* @flow */

import * as React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { Stepper, withTheme } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

type Props = {
  theme: Theme
}

class StepperExample extends React.Component<Props> {
  state = {
    value: 0
  }

  onChange = value => {
    this.setState({ value })
  }

  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props

    const { value } = this.state

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: background, padding: spacing.large }]}>
        <Stepper value={value} onChange={this.onChange} style={styles.stepper} />
        <Stepper value={value} style={styles.stepper} />
        <Stepper style={styles.stepper} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stepper: {
    alignSelf: "center",
    margin: 16
  }
})

export default withTheme(StepperExample)
