import * as React from "react"
import { Text as NativeText, I18nManager } from "react-native"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
class Text extends React.Component {
  /**
   * @internal
   */
  setNativeProps(...args) {
    return this._root && this._root.setNativeProps(...args)
  }

  render() {
    const { style, theme, ...rest } = this.props
    const writingDirection = I18nManager.isRTL ? "rtl" : "ltr"

    return (
      <NativeText
        {...rest}
        ref={c => {
          this._root = c
        }}
        style={[
          {
            textAlign: "left",
            writingDirection
          },
          style
        ]}
      />
    )
  }
}

export default withTheme(Text)

export const SEED_DATA = {
  name: "Text",
  tag: "Text",
  description: "A basic Text component",
  category: COMPONENT_TYPES.basic,
  supports_list_render: false,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/Text.svg",
  layout: {},
  props: {
    children: {
      label: "Text",
      description: "Text for the text",
      editable: true,
      required: true,
      type: FORM_TYPES.string,
      value: "Hello World!"
    },
    numberOfLines: {
      label: "Number of Lines",
      description: "Limits the maximum number of lines and truncates when needed",
      editable: true,
      required: false,
      type: FORM_TYPES.number,
      value: null,
      min: 0,
      max: 10,
      step: 1
    },
    ellipsizeMode: {
      label: "Ellipsize Mode",
      description: "The styling for the ellipsize(Default: tail)",
      editable: true,
      required: false,
      type: FORM_TYPES.flatArray,
      options: ["head", "middle", "tail", "clip"]
    }
  }
}
