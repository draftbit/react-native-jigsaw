import React from "react"
import { Image } from "react-native"

export default function Icon({ size, style }) {
  return (
    <Image source={require("../assets/icon.svg")} style={[{ width: size, height: size }, style]} />
  )
}
