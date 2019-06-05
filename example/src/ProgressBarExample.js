/* @flow */

import * as React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { ProgressBar, withTheme, NewProgressBar, ProgressCircle, PageIndicator } from "@draftbit/ui"
import type { Theme } from "@draftbit/ui/types"
import StepIndicator from "react-native-step-indicator"

// const customStyles = {
//   stepIndicatorSize: 25,
//   currentStepIndicatorSize: 30,
//   separatorStrokeWidth: 2,
//   currentStepStrokeWidth: 30,
//   stepStrokeCurrentColor: "#00fe3b",
//   stepStrokeWidth: 5,
//   stepStrokeFinishedColor: "#fe7013",
//   stepStrokeUnFinishedColor: "#aaaaaa",
//   separatorFinishedColor: "#714dfe",
//   separatorUnFinishedColor: "#aaaaaa",
//   stepIndicatorFinishedColor: "#fe7013",
//   stepIndicatorUnFinishedColor: "#ffffff",
//   stepIndicatorCurrentColor: "#ffffff",
//   stepIndicatorLabelFontSize: 13,
//   currentStepIndicatorLabelFontSize: 13,
//   stepIndicatorLabelCurrentColor: "#fe7013",
//   stepIndicatorLabelFinishedColor: "#ffffff",
//   stepIndicatorLabelUnFinishedColor: "#aaaaaa",
//   labelColor: "#999999",
//   labelSize: 13,
//   currentStepLabelColor: "#fe7013"
// }

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
        <PageIndicator
          stepCount={5}
          stepPosition={4}
          currentStepStrokeWidth={2}
          stepStrokeCurrentColor={"#4638fe"}
          stepIndicatorSize={30}
          unfinishedColor={"#6972fe"}
          finishedColor={"#4638fe"}
        />
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
