import React from "react"
import UnsupportedView from "./UnsupportedView"

export default function WebView({ aspectRatio, style }) {
  return <UnsupportedView tag="WebView" style={[style, { aspectRatio }]} />
}
