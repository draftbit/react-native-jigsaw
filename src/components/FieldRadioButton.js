import * as React from "react"
import { View, Text } from "react-native"
import { withTheme } from "../core/theming"
import Touchable from "./Touchable"
import RadioButton from "./RadioButton"

import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types"

class FieldRadioButton extends React.Component {
  onPress = () => {
    const { onPress } = this.props

    if (onPress) {
      onPress()
    }
  }

  render() {
    const {
      title,
      selected,
      disabled,
      color,
      onPress,
      theme: { colors, typography, spacing, disabledOpacity }
    } = this.props

    let titleColor = selected ? colors.medium : colors.light

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string()
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={{ flexDirection: "row" }}>
          <RadioButton color={color} selected={selected} disabled={disabled} />
          <Text style={[typography.body1, { color: titleColor, marginLeft: spacing.medium }]}>
            {title}
          </Text>
        </View>
      </Touchable>
    )
  }
}

export default withTheme(FieldRadioButton)

export const SEED_DATA = {
  name: "Field Radio Button",
  tag: "FieldRadioButton",
  category: COMPONENT_TYPES.field,
  preview_image_url: "{CLOUDINARY_URL}/Field_Radio.png",
  props: {
    title: {
      label: "Title",
      description: "Title to display alongside radio button",
      required: false,
      editable: true,
      value: "Title",
      type: FORM_TYPES.string
    },
    selected: {
      label: "Selected",
      description: "Whether the radio button is selected",
      required: true,
      editable: true,
      value: true,
      type: FORM_TYPES.boolean
    },
    color: {
      label: "Color",
      description: "Color for the button",
      required: false,
      editable: true,
      value: "primary",
      type: FORM_TYPES.color
    },
    disabled: {
      label: "Disabled",
      description: "Whether radio button is disabled",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean
    }
  },
  layout: {}
}
