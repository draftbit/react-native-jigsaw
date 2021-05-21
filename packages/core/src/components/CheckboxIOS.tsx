import * as React from "react";
import { View, TouchableHighlightProps } from "react-native";
import Touchable from "./Touchable";
import { withTheme } from "../theming";

import type { Theme } from "../styles/DefaultTheme";
import type { IconSlot } from "../interfaces/Icon";

type Props = {
  status?: "checked" | "indeterminate" | "unchecked";
  disabled?: boolean;
  onPress?: () => void;
  theme: Theme;
  color?: string;
} & TouchableHighlightProps &
  IconSlot;

const CheckboxIOS: React.FC<Props> = ({
  Icon,
  status = "unchecked",
  disabled = false,
  onPress = () => {},
  theme,
  color,
  style,
  ...rest
}) => {
  const indeterminate = status === "indeterminate";
  const checkedColor = color || theme.colors.primary;
  const icon = indeterminate ? "MaterialIcons/remove" : "MaterialIcons/done";

  return (
    <Touchable
      {...rest}
      onPress={onPress}
      disabled={disabled}
      accessibilityState={{ disabled }}
      accessibilityRole="button"
      accessibilityLiveRegion="polite"
      style={[
        {
          borderRadius: 2,
          width: 25,
          height: 25,
          backgroundColor:
            status === "unchecked" ? theme.colors.surface : checkedColor,
          borderColor: theme.colors.light,
          borderWidth: status === "unchecked" ? 2 : 0,
          opacity: disabled ? theme.disabledOpacity : 1,
        },
        style,
      ]}
    >
      <View
        style={{
          opacity: indeterminate || disabled ? theme.disabledOpacity : 1,
        }}
      >
        <Icon name={icon} size={24} color={theme.colors.surface} />
      </View>
    </Touchable>
  );
};

export default withTheme(CheckboxIOS);
