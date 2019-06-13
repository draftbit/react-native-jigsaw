import React from "react"
import UnsupportedView from "./UnsupportedView"

export default function ProgressIndicator({ aspectRatio, style }) {
  return <UnsupportedView tag="ProgressIndicator" style={[style, { aspectRatio }]} />
}
