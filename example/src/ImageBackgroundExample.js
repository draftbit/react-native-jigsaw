/* @flow */

import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { ImageBackground, withTheme } from "@draftbit/ui"
import EXAMPLE_IMAGES from "../constants"

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
            uri: EXAMPLE_IMAGES.imageBackground
          }}
          resizeMode="cover">
          <Text style={styles.text}>"It's a gundam!"</Text>
        </ImageBackground>
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
    height: "100%",
    alignContent: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30
  }
})

export default withTheme(ImageBackgroundExample)
