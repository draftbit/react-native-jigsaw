import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { withTheme } from "../theming";
import {
  COMPONENT_TYPES,
  createIconSizeProp,
  createColorProp,
  createFieldNameProp,
} from "@draftbit/types";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import IconButton from "./IconButton";
import { usePrevious } from "../hooks";

type Props = {
  value?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: number) => void;
  initialValue?: number;
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
  initialValue,
  theme: { colors, typography, roundness },
  iconSize = 24,
  iconColor = colors.strong,
  borderRadius = roundness,
  typeStyle,
}) => {
  const [stateValue, setStateValue] = React.useState(value);

  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      setStateValue(initialValue);
      onChange && onChange(initialValue);
    }
  }, [initialValue, previousInitialValue, onChange, setStateValue]);

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
    category: COMPONENT_TYPES.input,
    layout: {},
    triggers: ["ON_CHANGE"],
    props: {
      fieldName: createFieldNameProp({
        defaultValue: "stepperValue",
        handlerPropName: "onChange",
        valuePropName: "value",
      }),
      iconSize: createIconSizeProp({ defaultValue: 24 }),
      iconColor: createColorProp({ defaultValue: "strong" }),
    },
  },
];
