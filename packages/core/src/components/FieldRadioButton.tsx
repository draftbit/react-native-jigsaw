import * as React from "react";
import Color from "color";
import { View, Text } from "react-native";
import { withTheme } from "../theming";
import Touchable from "./Touchable";
import RadioButton from "./RadioButton/RadioButton";

import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  colorTypes,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";

type Props = {
  onPress?: () => void;
  title?: string;
  selected: boolean;
  disabled?: boolean;
  color: colorTypes;
  theme: Theme;
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
            { color: titleColor, marginLeft: 12 },
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
  category: COMPONENT_TYPES.deprecated,
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
