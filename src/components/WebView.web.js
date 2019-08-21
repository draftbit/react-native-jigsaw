import React from "react"
import UnsupportedView from "./UnsupportedView"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"

export default function WebView({ aspectRatio, style }) {
  return <UnsupportedView tag="WebView" style={[style, { aspectRatio }]} />
}
