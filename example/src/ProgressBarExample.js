/* @flow */

import * as React from "react"
import { StyleSheet, ScrollView, View } from "react-native"
import { ProgressBar, withTheme, NewProgressBar, ProgressCircle, StepIndicator } from "@draftbit/ui"
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
        <View style={{ backgroundColor: "#f5f5f5" }}>
          <StepIndicator
            numberOfSteps={6}
            currentStep={3}
            currentStepStrokeWidth={0}
            stepIndicatorSize={25}
            stepIndicatorLabelFontSize={13}
            stepNumberFinishedColor={"#000000"}
            stepNumberUnfinishedColor={"#ffffff"}
            unfinishedColor={"#714dfe"}
            finishedColor={"#ffffff"}
          />
        </View>
        <ProgressBar progress={0} style={styles.progressBar} />
        <ProgressBar progress={0.25} style={styles.progressBar} />
        <ProgressBar progress={0.5} style={styles.progressBar} />
        <ProgressBar progress={0.75} style={styles.progressBar} />
        <ProgressBar progress={1} style={styles.progressBar} />
        <NewProgressBar
          progress={0.5}
          style={{ width: 380, height: 10 }}
          borderRadius={20}
          color="#5a45ff"
          unfilledColor="#000000"
        />
        <ProgressCircle
          size={300}
          progress={0.75}
          color="#5a45ff"
          unfilledColor="#000000"
          showsText={true}
          direction="clockwise"
          thickness={10}
        />
        <ProgressCircle
          size={300}
          progress={0.5}
          color="#5a45ff"
          unfilledColor="#000000"
          showsText={false}
          direction="counter-clockwise"
        />
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
