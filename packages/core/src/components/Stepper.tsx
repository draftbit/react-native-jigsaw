import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
  FIELD_NAME,
  BORDER_RADIUS_MODE,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import IconButton from "./IconButton";

type Props = {
  value?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: number) => void;
  iconSize?: number;
  iconColor?: string;
  borderRadius?: number;
  typeStyle?: StyleProp<TextStyle>;
} & IconSlot;

const Stepper: React.FC<Props> = ({
  Icon,
  value = 0,
  style,
  onChange,
  theme: { colors, typography, roundness },
  iconSize = 24,
  iconColor = colors.strong,
  borderRadius = roundness,
  typeStyle,
}) => {
  const [stateValue, setStateValue] = React.useState(value);

  const handleMinus = () => {
    if (value || value === 0) {
      onChange && onChange(value - 1);
    } else {
      setStateValue(stateValue - 1);
    }
  };

  const handlePlus = () => {
    if (value || value === 0) {
      onChange && onChange(value + 1);
    } else {
      setStateValue(stateValue + 1);
    }
  };

  return (
    <View
      style={[
        { flexDirection: "row" },
        style,
        borderRadius ? { borderRadius } : {},
      ]}
    >
      <IconButton
        Icon={Icon}
        icon="MaterialIcons/remove"
        onPress={handleMinus}
        size={iconSize}
        color={iconColor}
        disabled={value ? value === 0 : stateValue === 0}
      />
      <Text
        style={[
          typography.body1,
          {
            textAlign: "center",
            alignSelf: "center",
            color: colors.medium,
            marginHorizontal: 8,
          },
          typeStyle,
        ]}
      >
        {value || stateValue}
      </Text>
      <IconButton
        Icon={Icon}
        icon="MaterialIcons/add"
        onPress={handlePlus}
        size={iconSize}
        color={iconColor}
      />
    </View>
  );
};

export default withTheme(Stepper);

export const SEED_DATA = [
  {
    name: "Stepper",
    tag: "Stepper",
    description: "A component used to control the quantity of something",
    category: COMPONENT_TYPES.button,
    layout: {},
    props: {
      fieldName: {
        ...FIELD_NAME,
        defaultValue: "stepperValue",
      },
      iconSize: {
        group: GROUPS.basic,
        label: "Current Icon Size",
        description: "The size of the icons",
        editable: true,
        required: false,
        min: 0,
        max: 60,
        step: 1,
        formType: FORM_TYPES.number,
        propType: PROP_TYPES.NUMBER,
        defaultValue: 24,
      },
      iconColor: {
        group: GROUPS.basic,
        label: "Current Icon Color",
        description: "The color of the icons",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
        propType: PROP_TYPES.THEME,
        defaultValue: "strong",
      },
      borderRadius: {
        ...BORDER_RADIUS_MODE,
      },
    },
  },
];
