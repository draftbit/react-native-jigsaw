import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import IconButton from "./IconButton";

type Props = {
  value?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: number) => void;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  iconSize?: number;
  iconColor?: string;
  borderRadius?: number;
  typeStyle?: StyleProp<TextStyle>;
  step?: number;
} & IconSlot;

const Stepper: React.FC<Props> = ({
  Icon,
  value,
  style,
  onChange,
  defaultValue,
  minValue,
  maxValue,
  theme: { colors, typography, roundness },
  iconSize = 24,
  iconColor = colors.strong,
  borderRadius = roundness,
  typeStyle,
  step = 1,
}) => {
  const [stateValue, setStateValue] = React.useState(
    value || defaultValue || 0
  );

  React.useEffect(() => {
    if (value != null) {
      setStateValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (defaultValue != null) {
      setStateValue(defaultValue);
    }
  }, [defaultValue]);

  const handleMinus = () => {
    if (value || value === 0) {
      if (
        (minValue !== undefined && value - step >= minValue) ||
        minValue === undefined
      ) {
        onChange && onChange(value - step);
      }
    } else {
      setStateValue(stateValue - step);
    }
  };

  const handlePlus = () => {
    if (value || value === 0) {
      if (
        (maxValue !== undefined && value <= maxValue - step) ||
        maxValue === undefined
      ) {
        onChange && onChange(value + step);
      }
    } else {
      setStateValue(stateValue + step);
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
