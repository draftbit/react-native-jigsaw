import * as React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FIELD_NAME } from "../core/component-types";
import IconButton from "./IconButton";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

interface Props {
  value?: number;
  theme: typeof theme;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: number) => void;
}

const Stepper: React.FC<Props> = ({
  value = 0,
  style,
  onChange,
  theme: { colors, typography, spacing },
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
    <View style={[{ flexDirection: "row" }, style]}>
      <IconButton
        icon="MaterialIcons/remove"
        onPress={handleMinus}
        size={Config.stepperButtonSize}
        color={colors.strong}
        disabled={value ? value === 0 : stateValue === 0}
      />
      <Text
        style={[
          typography.body1,
          {
            textAlign: "center",
            alignSelf: "center",
            color: colors.medium,
            marginHorizontal: spacing.medium,
          },
        ]}
      >
        {value || stateValue}
      </Text>
      <IconButton
        icon="MaterialIcons/add"
        onPress={handlePlus}
        size={Config.stepperButtonSize}
        color={colors.strong}
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
    },
    layout: {},
  },
];
