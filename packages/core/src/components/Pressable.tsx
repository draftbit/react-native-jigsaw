import React from "react";
import {
  Pressable as NativePressable,
  PressableProps,
  ViewStyle,
} from "react-native";

type Props = {
  disabled?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  onLongPress?: () => void;
  delayLongPress?: number;
  hitSlop?: number;
  activeOpacity?: number;
  disabledOpacity?: number;
} & PressableProps;

export default function Pressable({
  children,
  disabled,
  onPress,
  activeOpacity,
  disabledOpacity,
  delayLongPress,
  hitSlop,
  style,
  ...props
}: Props) {
  return (
    <NativePressable
      onPress={onPress}
      disabled={disabled}
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
    </NativePressable>
  );
}
