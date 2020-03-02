import * as React from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { ProgressIndicator, withTheme } from "@draftbit/ui"

class ProgressIndicatorExample extends React.Component {
  static title = "Progress Indicator"

  render() {
    const { colors } = this.props.theme

    return (
      <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.column}>
          <ProgressIndicator
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
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  space: {
    margin: 4
  },
  column: {
    backgroundColor: "#f5f5f5"
  },
  row: {
    alignItems: "center"
  }
})

export default withTheme(ProgressIndicatorExample)
