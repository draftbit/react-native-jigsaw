/* @flow */
import * as React from "react";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES, FIELD_NAME } from "../core/component-types";
import { StyleSheet, View, Text } from "react-native";
import Touchable from "./Touchable";
import Checkbox from "./Checkbox";
import type { Theme } from "../types";
import color from "color";

type Props = {|
  title: string,
  style?: any,
  theme: Theme,
  status: "checked" | "unchecked" | "indeterminate",
  disabled?: boolean,
  color?: string,
  onPress?: () => mixed
|};

class FieldCheckbox extends React.Component<Props> {
  onPress = () => {
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  };

  render() {
    const {
      title,
      status,
      onPress,
      color: checkboxColor,
      disabled,
      theme: { colors, typography, spacing, disabledOpacity }
    } = this.props;

    let titleColor = status === "checked" ? colors.medium : colors.light;

    if (disabled) {
      titleColor = color(titleColor)
        .alpha(disabledOpacity)
        .rgb()
        .string();
    }

    return (
      <Touchable onPress={this.onPress} disabled={disabled}>
        <View style={styles.container}>
          <Checkbox status={status} disabled={disabled} onPress={onPress} color={checkboxColor} />
          <Text style={[typography.body1, { marginLeft: spacing.medium, color: titleColor }]}>{title}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default withTheme(FieldCheckbox);

export const SEED_DATA = [
  {
    name: "Field Checkbox",
    tag: "FieldCheckbox",
    description: "A row with left aligned checkbox and body",
    preview_image_url: "{CLOUDINARY_URL}/Field_Checkbox.png",
    category: COMPONENT_TYPES.field,
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
        description: "Custom color for the checkbox",
        editable: true,
        required: false,
        type: FORM_TYPES.color
      },
      disabled: {
        label: "Disabled",
        description: "Whether checkbox and headline is disabled",
        editable: true,
        required: false,
        value: false,
        type: FORM_TYPES.boolean
      },
      fieldName: {
        ...FIELD_NAME,
        value: "checkboxValue",
        valuePropName: "status",
        handlerPropName: "onPress"
      }
    },
    layout: {
      width: 343,
      height: 59
    }
  }
];
