import * as React from "react"
import { View, StyleSheet } from "react-native"
import { ActivityIndicator, withTheme } from "@draftbit/ui"

class ActivityIndicatorExample extends React.Component {
  render() {
    const { colors, spacing } = this.props.theme

    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
            padding: spacing.large
          }
        ]}>
        <ActivityIndicator
          style={styles.indicator}
          size="small"
          animating={true}
          hidesWhenStopped={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  indicator: {
    width: 38,
    height: 38
  }
})

export default withTheme(ActivityIndicatorExample)
