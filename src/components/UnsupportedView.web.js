import React, { useState } from "react"
import { StyleSheet, Text, ImageBackground } from "react-native"
import AspectRatio from "./AspectRatio"

function maybeRenderText(layout) {
  if (layout.width > 100 && layout.height > 100) return true
  return false
}

export default function UnsupportedView({ tag, style }) {
  const { aspectRatio, ...extraStyles } = StyleSheet.flatten(style)
  const [layout, setLayout] = useState({})

  const message = `${tag} is not supported in Web Preview yet, please use Live Preview`
  if (aspectRatio && extraStyles.position !== "absolute") {
    return (
      <AspectRatio
        ratio={aspectRatio}
        onLayout={e => {
          setLayout({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
          })

          return {
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
          }
        }}>
        <ImageBackground
          style={[extraStyles, styles.container, { width: layout.width, height: layout.height }]}
          imageStyle={styles.image}
          source={require("../assets/bg.png")}
          resizeMode="repeat">
          {maybeRenderText(layout) ? <Text style={styles.text}>{message}</Text> : null}
        </ImageBackground>
      </AspectRatio>
    )
  }

  return (
    <ImageBackground
      onLayout={e => {
        setLayout({
          width: e.nativeEvent.layout.width,
          height: e.nativeEvent.layout.height
        })
      }}
      style={[extraStyles, styles.container]}
      source={require("../assets/bg.png")}
      resizeMode="repeat">
      {maybeRenderText(layout) ? <Text style={styles.text}>{message}</Text> : null}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#571081",
    textAlign: "center"
  }
})
