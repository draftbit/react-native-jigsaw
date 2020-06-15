import * as React from "react";
import Color from "color";
import { View, Text } from "react-native";
import { withTheme } from "../core/theming";
import Touchable from "./Touchable";
import RadioButton from "./RadioButton";

import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

function FieldRadioButton({
  onPress,
  title,
  selected,
  disabled,
  color,
  theme,
}) {
  let titleColor = selected ? theme.colors.primary : theme.colors.light;

  if (disabled) {
    titleColor = Color(titleColor)
      .alpha(theme.colors.disabledOpacity)
      .rgb()
      .string();
  }

  return (
    <Touchable onPress={() => onPress()} disabled={disabled}>
      <View style={{ flexDirection: "row" }}>
        <RadioButton color={color} selected={selected} disabled={disabled} />
        <Text
          style={[
            theme.typography.body1,
            { color: titleColor, marginLeft: theme.spacing.medium },
          ]}
        >
          {title}
        </Text>
      </View>
    </Touchable>
  );
}

FieldRadioButton.defaultProps = {
  onPress: () => {},
};

export default withTheme(FieldRadioButton);

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
      type: FORM_TYPES.string,
    },
    selected: {
      label: "Selected",
      description: "Whether the radio button is selected",
      required: true,
      editable: true,
      value: true,
      type: FORM_TYPES.boolean,
    },
    color: {
      label: "Color",
      description: "Color for the button",
      required: false,
      editable: true,
      value: "primary",
      type: FORM_TYPES.color,
    },
    disabled: {
      label: "Disabled",
      description: "Whether radio button is disabled",
      editable: true,
      required: false,
      value: null,
      type: FORM_TYPES.boolean,
    },
  },
  layout: {},
};
