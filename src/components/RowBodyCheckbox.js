/* @flow */
import * as React from "react"
import { withTheme } from "../core/theming"
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../core/component-types"
import Row from "./Row"
import Checkbox from "./Checkbox"
import Config from "./Config"
import type { Theme } from "../types"

type Props = {
  title: string,
  subtitle?: string,
  style?: any,
  theme: Theme,
  status: "checked" | "unchecked" | "indeterminate",
  color?: string,
  onPress?: () => mixed
}

class RowBodyCheckbox extends React.Component<Props> {
  render() {
    const {
      title,
      subtitle,
      style,
      status,
      onPress,
      color,
      theme: { colors, typography }
    } = this.props

    return (
      <Row
        titleTypeStyle={typography.body1}
        titleColor={colors.medium}
        subtitleTypeStyle={typography.subtitle2}
        subtitleColor={colors.light}
        title={title}
        subtitle={subtitle}
        right={() => (
          <Checkbox
            status={status}
            size={Config.rowSingleLineIconSize}
            color={color}
            onPress={onPress}
          />
        )}
        style={style}
      />
    )
  }
}

export default withTheme(RowBodyCheckbox)

export const SEED_DATA = [
  {
    name: "Row Single Line Body Checkbox",
    tag: "RowBodyCheckbox",
    description: "A row with left aligned body text and a right aligned checkbox",
    preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_BodyCheckbox.png",
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
        label: "Checkbox color",
        description: "Custom color for Checkbox",
        editable: true,
        required: false,
        type: FORM_TYPES.color
      },
      fieldName: {
        ...FIELD_NAME,
        value: "checkboxValue",
        valuePropName: "status",
        handlerPropName: "onPress"
      }
    },
    layout: {}
  },
  {
    name: "Row Double Line Body Checkbox",
    tag: "RowBodyCheckbox",
    description: "A row with left aligned body text and subtitle text and a right aligned checkbox",
    category: COMPONENT_TYPES.row,
    preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_BodyCheckbox.png",
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
        description: "Custom color for Checkbox",
        editable: true,
        required: false,
        type: FORM_TYPES.color
      },
      fieldName: {
        ...FIELD_NAME,
        value: "checkboxValue",
        valuePropName: "status",
        handlerPropName: "onPress"
      }
    },
    layout: {}
  }
]
