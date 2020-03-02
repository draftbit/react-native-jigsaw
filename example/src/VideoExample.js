import * as React from "react"
import { View, StyleSheet } from "react-native"
import { Video, withTheme } from "@draftbit/ui"

class VideoExample extends React.Component {
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
        <Video
          style={{ width: 300, height: 300 }}
          rate={1}
          source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
          volume={1}
          resizeMode="contain"
          shouldPlay={true}
          positionMillis={0}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withTheme(VideoExample)
