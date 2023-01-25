import React from "react";
import { Pressable, PressableProps, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
  activeOpacity?: number;
  disabledOpacity?: number;
} & PressableProps;

export default function Touchable({
  children,
  disabled,
  onPress,
  activeOpacity = 0.8,
  disabledOpacity = 0.8,
  delayLongPress,
  hitSlop,
  style,
  ...props
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      delayLongPress={delayLongPress ? delayLongPress : 500}
      hitSlop={hitSlop ? hitSlop : 8}
      style={({ pressed }) => {
        return [
          {
            opacity: pressed ? activeOpacity : disabled ? disabledOpacity : 1,
          },
          style,
        ];
      }}
      {...props}
    >
      {children}
    </Pressable>
  );
}
