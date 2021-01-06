import * as React from "react";
import { View, TouchableHighlightProps } from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import { withTheme } from "../core/theming";
import themeT from "../styles/DefaultTheme";
import { FocusProps } from "src/types";

type Props = {
  status?: "checked" | "indeterminate" | "unchecked";
  disabled?: boolean;
  onPress?: () => void;
  theme: typeof themeT;
  color?: string;
} & TouchableHighlightProps &
  FocusProps;

const CheckboxIOS: React.FC<Props> = ({
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
      accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityState={{ disabled }}
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
