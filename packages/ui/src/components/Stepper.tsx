import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  GROUPS,
  PROP_TYPES,
  FIELD_NAME,
  BORDER_RADIUS_MODE,
} from "../core/component-types";
import IconButton from "./IconButton";
import theme from "../styles/DefaultTheme";
import type Icon from "./Icon";

type Props = {
  value?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: number) => void;
  iconSize?: number;
  iconColor?: string;
  borderRadius?: number;
  typeStyle?: StyleProp<TextStyle>;
  IconOverride?: typeof Icon;
};

const Stepper: React.FC<Props> = ({
  value = 0,
  style,
  onChange,
  theme: { colors, typography, spacing },
  iconSize = 24,
  iconColor = colors.strong,
  borderRadius = theme.borderRadius.button,
  IconOverride,
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
        icon="MaterialIcons/remove"
        onPress={handleMinus}
        size={iconSize}
        color={iconColor}
        disabled={value ? value === 0 : stateValue === 0}
        IconOverride={IconOverride}
      />
      <Text
        style={[
          typography.body1,
          {
            textAlign: "center",
            alignSelf: "center",
            color: colors.medium,
            marginHorizontal: spacing.small,
          },
          typeStyle,
        ]}
      >
        {value || stateValue}
      </Text>
      <IconButton
        icon="MaterialIcons/add"
        onPress={handlePlus}
        size={iconSize}
        color={iconColor}
        IconOverride={IconOverride}
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
    category: COMPONENT_TYPES.field,
    preview_image_url: "{CLOUDINARY_URL}/Control_Stepper.png",
    supports_list_render: false,
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
    layout: {},
  },
];
