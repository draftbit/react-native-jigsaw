import React from "react"
import UnsupportedView from "./UnsupportedView"

export default function MapSimple({ aspectRatio, style }) {
  return <UnsupportedView tag="MapSimple" style={[style, { aspectRatio }]} />
}
