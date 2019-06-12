/* @flow */

import * as React from "react"
import { StyleSheet, ScrollView, View } from "react-native"
import { withTheme, ProgressBar, ProgressCircle } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"

type Props = {
  theme: Theme
}

class ProgressBarExample extends React.Component<Props> {
  render() {
    const {
      theme: {
        colors: { background },
        spacing
      }
    } = this.props

    return (
      <ScrollView style={[styles.container, { backgroundColor: background }]}>
        <View style={{ marginBottom: 40 }}>
          <ProgressBar
            progress={0.5}
            style={{ width: 250, height: 5 }}
            borderRadius={10}
            color="#5a45ff"
            unfilledColor="#000000"
          />
        </View>
        <View style={{ marginBottom: 40 }}>
          <ProgressCircle
            size={100}
            progress={0.8}
            color="#5a45ff"
            unfilledColor="#000000"
            showsText={true}
            direction="clockwise"
            thickness={10}
          />
        </View>
        <View style={{ marginBottom: 40 }}>
          <ProgressCircle
            size={100}
            progress={0.5}
            color="#5a45ff"
            unfilledColor="#000000"
            showsText={false}
            direction="counter-clockwise"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  progressBar: {
    marginVertical: 50
  }
})

export default withTheme(ProgressBarExample)
