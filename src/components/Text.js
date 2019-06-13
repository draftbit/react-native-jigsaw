/* @flow */

import * as React from "react"
import { Text as NativeText, I18nManager } from "react-native"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"
import type { Theme } from "../types"

type Props = React.ElementConfig<typeof NativeText> & {
  style?: any,
  /**
   * @optional
   */
  theme: Theme
}

/**
 * Text component which follows styles from the theme.
 *
 * @extends Text props https://facebook.github.io/react-native/docs/text.html#props
 */
class Text extends React.Component<Props> {
  _root: ?NativeText

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
  category: COMPONENT_TYPES.content,
  supports_list_render: false,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/Text.svg",
  layout: {
    width: "100%"
  },
  props: {
    children: {
      label: "Text",
      description: "Text for the text",
      editable: true,
      required: true,
      type: FORM_TYPES.string,
      value: "Hello World!"
    },
    style: {
      label: "Style",
      description: "Text Style",
      editable: true,
      required: false,
      type: FORM_TYPES.typeStyle,
      value: null
    },
    textAlign: {
      label: "Text Align",
      description: "Text Align",
      editable: true,
      required: false,
      type: FORM_TYPES.flatArray,
      options: ["Auto", "Left", "Right", "Center", "Justify"]
    },
    textDecorationLine: {
      label: "Text Decoration",
      description: "Text Decoration",
      editable: true,
      required: false,
      type: FORM_TYPES.flatArray,
      options: ["None", "Underline", "Line-Through", "Underline Line-Through"]
    },
    textDecorationColor: {
      label: "Text Decoration Color",
      description: "Text Decoration Color",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
      value: null
    },
    textDecorationStyle: {
      label: "Text Decoration Style",
      description: "Text Decoration Style",
      editable: true,
      required: false,
      type: FORM_TYPES.flatArray,
      options: ["None", "Solid", "Double", "Dotted", "Dashed"]
    },
    color: {
      label: "Text Color",
      description: "Text Color",
      editable: true,
      required: false,
      type: FORM_TYPES.color,
      value: "strong"
    }
  }
}
