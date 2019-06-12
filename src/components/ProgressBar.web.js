import React from "react"
import { ProgressBar as NativeProgressBar } from 'react-native'

export default function ProgressBar({
  progress,
  borderRadius,
  animationType,
  color,
  unfilledColor,
  borderColor,
  borderWidth,
  style,
}) {
  return (
    <NativeProgressBar
      color={color}
      progress={progress}
      trackColor={color}
      style={style}
    />
  )
}
