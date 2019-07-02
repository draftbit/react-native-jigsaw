import React from "react"
import UnsupportedView from "./UnsupportedView"

export default function Video({ aspectRatio, style }) {
  return <UnsupportedView tag="Video" style={[style, { aspectRatio }]} />
}
