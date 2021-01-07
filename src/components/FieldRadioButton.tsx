import * as React from "react";
import Color from "color";
import { View, Text } from "react-native";
import { withTheme } from "../core/theming";
import Touchable from "./Touchable";
import RadioButton from "./RadioButton";

import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import themeT from "../styles/DefaultTheme";

type Props = {
  onPress?: () => void;
  title?: string;
  selected: boolean;
  disabled?: boolean;
  color: string;
  theme: typeof themeT;
};

const FieldRadioButton: React.FC<Props> = ({
  onPress = () => {},
  title,
  selected,
  disabled = false,
  color,
  theme,
}) => {
  let titleColor = selected ? theme.colors.primary : theme.colors.light;

  if (disabled) {
    titleColor = Color(titleColor).alpha(theme.disabledOpacity).rgb().string();
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
};

export default withTheme(FieldRadioButton);

export const SEED_DATA = {
  name: "Field Radio Button",
  tag: "FieldRadioButton",
  category: COMPONENT_TYPES.field,
  preview_image_url: "{CLOUDINARY_URL}/Field_Radio.png",
  props: {
    title: {
      group: GROUPS.data,
      label: "Title",
      description: "Title to display alongside radio button",
      required: false,
      editable: true,
      defaultValue: "Title",
      formType: FORM_TYPES.string,
    },
    selected: {
      group: GROUPS.data,
      label: "Selected",
      description: "Whether the radio button is selected",
      required: true,
      editable: true,
      defaultValue: true,
      formType: FORM_TYPES.boolean,
    },
    color: {
      group: GROUPS.basic,
      label: "Color",
      description: "Color for the button",
      required: false,
      editable: true,
      defaultValue: "primary",
      formType: FORM_TYPES.color,
    },
    disabled: {
      group: GROUPS.basic,
      label: "Disabled",
      description: "Whether radio button is disabled",
      editable: true,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.boolean,
    },
  },
  layout: {},
};
