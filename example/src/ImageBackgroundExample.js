/* @flow */

import * as React from "react"
import { View, StyleSheet } from "react-native"
import { ImageBackground, withTheme } from "@draftbit/ui"

class ImageBackgroundExample extends React.Component {
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
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri:
              "https://images.unsplash.com/photo-1562461089-907f104c2b9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
          }}
          resizeMode="cover"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  }
})

export default withTheme(ImageBackgroundExample)
