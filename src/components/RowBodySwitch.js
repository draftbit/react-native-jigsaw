/* @flow */

import * as React from "react"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../core/component-types"
import Row from "./Row"
import Switch from "./Switch"
import type { Theme } from "../types"

type Props = {
  title: string,
  subtitle?: string,
  style?: any,
  theme: Theme,
  value?: boolean,
  color?: string,
  onValueChange?: Function
}

class RowBodySwitch extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      style,
      value,
      onValueChange,
      color,
      theme: { colors, typography, spacing }
    } = this.props

    return (
      <Row
        titleTypeStyle={typography.body1}
        titleColor={colors.medium}
        subtitleTypeStyle={typography.subtitle2}
        subtitleColor={colors.light}
        title={title}
        subtitle={subtitle}
        right={() => <Switch value={value} color={color} onValueChange={onValueChange} />}
        style={style}
      />
    )
  }
}

export default withTheme(RowBodySwitch)

export const SEED_DATA = [
  {
    name: "Row Single Line Body Switch",
    tag: "RowBodySwitch",
    description: "A row with left aligned body text and a right aligned switch",
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_BodyToggle.png",
    category: COMPONENT_TYPES.row,
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      color: {
        label: "Color",
        description: "Custom color for switch",
        editable: true,
        required: false,
        type: FORM_TYPES.color
      },
      fieldName: {
        ...FIELD_NAME,
        value: "switchValue",
        handlerPropName: "onValueChange"
      }
    },
    layout: {
      width: 375,
      height: 59
    }
  },
  {
    name: "Row Double Line Body Switch",
    tag: "RowBodySwitch",
    description: "A row with left aligned body text and subtitle text and a right aligned switch",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_Body_Toggle.png",
    supports_list_render: true,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        type: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        type: FORM_TYPES.string,
        value: "San Diego",
        editable: true
      },
      color: {
        label: "Color",
        description: "Custom color for switch",
        editable: true,
        required: false,
        type: FORM_TYPES.color
      },
      fieldName: {
        ...FIELD_NAME,
        value: "switchValue",
        handlerPropName: "onValueChange"
      }
    },
    layout: {
      width: 375,
      height: 81
    }
  }
]
