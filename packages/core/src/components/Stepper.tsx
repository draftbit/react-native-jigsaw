import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { isNumber } from "lodash";

import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";
import IconButton from "./IconButton";
import { extractStyles } from "../utilities";

type Props = {
  min: number;
  max: number;
  value?: number;
  defaultValue?: number;
  style?: StyleProp<ViewStyle | TextStyle>;
  iconSize: number;
  iconColor?: string;
  onChange?: (value: number) => void;
  theme: Theme;
} & IconSlot;

const Stepper: FC<Props> = ({
  min = -Infinity,
  max = Infinity,
  value: valueProp,
  defaultValue,
  style,
  iconSize = 24,
  iconColor,
  onChange,
  theme: { colors, typography },
  Icon,
}) => {
  const { viewStyles, textStyles } = extractStyles(style);
  const [value, setValue] = useState(defaultValue ?? 0);

  const isValidValue = (valueArg: number) => valueArg >= min && valueArg <= max;

  const handlePlusOrMinus = (type: "plus" | "minus") => {
    const newValue = type === "plus" ? value + 1 : value - 1;

    if (isValidValue(newValue)) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  useEffect(() => {
    if (
      valueProp != null &&
      isNumber(valueProp) &&
      valueProp !== value &&
      isValidValue(valueProp)
    ) {
      setValue(valueProp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueProp]);

  return (
    <View style={[{ flexDirection: "row" }, viewStyles]}>
      <IconButton
        Icon={Icon}
        icon="MaterialIcons/remove"
        onPress={() => handlePlusOrMinus("minus")}
        size={iconSize}
        color={iconColor}
        disabled={value === min}
        style={{ opacity: value === min ? 0.5 : 1 }}
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
          textStyles,
        ]}
      >
        {value}
      </Text>

      <IconButton
        Icon={Icon}
        icon="MaterialIcons/add"
        onPress={() => handlePlusOrMinus("plus")}
        size={iconSize}
        color={iconColor}
        disabled={value === max}
        style={{ opacity: value === max ? 0.5 : 1 }}
      />
    </View>
  );
};

export default withTheme(Stepper);
