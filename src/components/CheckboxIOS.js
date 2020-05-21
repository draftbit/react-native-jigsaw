import * as React from "react";
import { View } from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import { withTheme } from "../core/theming";

class CheckboxIOS extends React.Component {
  static displayName = "Checkbox.IOS";

  render() {
    const { status, disabled, onPress, theme, ...rest } = this.props;
    const indeterminate = status === "indeterminate";
    const checkedColor = this.props.color || theme.colors.primary;
    const icon = indeterminate ? "MaterialIcons/remove" : "MaterialIcons/done";

    return (
      <Touchable
        {...rest}
        onPress={onPress}
        borderless={false}
        disabled={disabled}
        accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityStates={disabled ? ["disabled"] : undefined}
        accessibilityLiveRegion="polite"
        style={{
          borderRadius: 2,
          width: 25,
          height: 25,
          backgroundColor:
            status === "unchecked" ? theme.colors.surface : checkedColor,
          borderColor: theme.colors.light,
          borderWidth: status === "unchecked" ? 2 : 0,
          opacity: disabled ? theme.disabledOpacity : 1,
        }}
      >
        <View
          style={{
            opacity: indeterminate || disabled ? theme.disabledOpacity : 1,
          }}
        >
          <Icon
            allowFontScaling={false}
            name={icon}
            size={24}
            color={theme.colors.surface}
          />
        </View>
      </Touchable>
    );
  }
}

export default withTheme(CheckboxIOS);
