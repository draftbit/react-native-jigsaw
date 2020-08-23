// @ts-nocheck
import * as React from "react";
import {
  Animated,
  View,
  StyleSheet,
  TouchableHighlightProps,
} from "react-native";
import Icon from "./Icon";
import Touchable from "./Touchable";
import { withTheme } from "../core/theming";
import themeI from "../styles/DefaultTheme";

interface Props extends TouchableHighlightProps {
  status: "checked" | "indeterminate" | "unchecked";
  disabled: boolean;
  onPress: () => void;
  theme: typeof themeI;
  color?: string;
}

const CheckboxAndroid: React.FC<Props> = ({
  status,
  disabled,
  onPress,
  theme,
  color,
  ...rest
}) => {
  //const displayName = "Checkbox.Android";

  const [scaleAnim] = React.useState<typeof Animated.Value>(
    new Animated.Value(1)
  );

  const checked = status === "checked";
  const indeterminate = status === "indeterminate";
  const uncheckedColor = theme.colors.light;
  const checkedColor = color || theme.colors.primary;
  const checkboxColor = checked ? checkedColor : uncheckedColor;
  const rippleColor = checkedColor;

  const borderWidth = scaleAnim.interpolate({
    inputRange: [0.8, 1],
    outputRange: [7, 0],
  });

  const icon = indeterminate
    ? "MaterialIcons/indeterminate-check-box"
    : checked
    ? "MaterialIcons/check-box"
    : "MaterialIcons/check-box-outline-blank";

  React.useEffect(() => {
    const checked = status === "checked";
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.85,
        duration: checked ? 200 : 0,
        useNativeDriver: false,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: checked ? 200 : 350,
        useNativeDriver: false,
      }),
    ]).start();
  }, [status, scaleAnim]);

  return (
    <Touchable
      {...rest}
      borderless={true}
      rippleColor={rippleColor}
      onPress={onPress}
      disabled={disabled}
      accessibilityTraits={disabled ? ["button", "disabled"] : "button"}
      accessibilityComponentType="button"
      accessibilityRole="button"
      accessibilityStates={disabled ? ["disabled"] : undefined}
      accessibilityLiveRegion="polite"
      style={{
        borderRadius: 18,
        width: 30,
        height: 30,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Icon
          allowFontScaling={false}
          name={icon}
          size={29}
          color={checkboxColor}
        />
        <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
          <Animated.View
            style={[
              styles.fill,
              { borderColor: checkboxColor },
              { borderWidth },
            ]}
          />
        </View>
      </Animated.View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  fillContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    height: 30,
    width: 30,
  },
});

export default withTheme(CheckboxAndroid);
