import React, { useState } from "react"
import { StyleSheet, Text, ImageBackground } from "react-native"
import AspectRatio from "./AspectRatio"

export default function UnsupportedView({ tag, style }) {
  const { aspectRatio, ...extraStyles } = StyleSheet.flatten(style)
  const [layout, setLayout] = useState({})

  if (aspectRatio && extraStyles.position !== "absolute") {
    return (
      <AspectRatio
        ratio={aspectRatio}
        onLayout={e => ({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height
        })}>
        <ImageBackground
          style={[extraStyles, styles.container, { width: layout.width, height: layout.height }]}
          imageStyle={styles.image}
          source={require("../assets/bg.png")}
          resizeMode="repeat">
          <Text style={styles.text}>
            {tag} isn't supported in Web Preview, yet. Please use Live Preview on your phone to it
            in action!
          </Text>
        </ImageBackground>
      </AspectRatio>
    )
  }

  return (
    <ImageBackground
      style={[extraStyles, styles.container]}
      source={require("../assets/bg.png")}
      resizeMode="repeat">
      <Text style={styles.text}>
        {tag} isn't supported in Web Preview, yet. Please use Live Preview on your phone to it in
        action!
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#571081",
    textAlign: "center"
  }
})
