import * as React from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

import IconButton from "./IconButton";
import isNumber from "lodash.isnumber";

type Props = {
  value?: number;
  min?: number;
  max?: number;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onChange?: (value: number) => void;
  defaultValue?: number;
  iconSize?: number;
  iconColor?: string;
  borderRadius?: number;
  typeStyle?: StyleProp<TextStyle>;
} & IconSlot;

const Stepper: React.FC<Props> = ({
  Icon,
  value,
  min,
  max,
  style,
  onChange,
  defaultValue,
  theme: { colors, typography, roundness },
  iconSize = 24,
  iconColor = colors.strong,
  borderRadius = roundness,
  typeStyle,
}) => {
  const [stateValue, setStateValue] = React.useState(
    value || defaultValue || 0
  );

  React.useEffect(() => {
    if (value || value === 0) {
      onChange && onChange(stateValue);
    }
  }, [onChange, stateValue, value]);

  React.useEffect(() => {
    let newValue = value || defaultValue || 0;
    if (isNumber(max) && newValue > max) {
      newValue = max;
    }
    if (isNumber(min) && newValue < min) {
      newValue = min;
    }
    setStateValue(newValue);
  }, [defaultValue, value, min, max]);

  const handleMinus = React.useCallback(() => {
    if (isNumber(min) && value === min) {
      return;
    }
    setStateValue(stateValue - 1);
  }, [min, stateValue, value]);

  const handlePlus = React.useCallback(() => {
    if (isNumber(max) && value === max) {
      return;
    }
    setStateValue(stateValue + 1);
  }, [max, stateValue, value]);

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
        disabled={stateValue === 0}
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
