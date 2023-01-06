import React from "react";
import { Pressable, PressableProps, ViewStyle } from "react-native";

type Props = {
  disabled?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  onLongPress?: () => void;
  delayLongPress?: number;
  hitSlop?: number;
  pressRetentionOffset?: number;
  activeOpacity?: number;
  disabledOpacity?: number;
} & PressableProps;

export default function Touchable({
  children,
  disabled,
  activeOpacity,
  disabledOpacity,
  delayLongPress,
  hitSlop,
  style,
  ...props
}: Props) {
  return (
    <Pressable
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
    </Pressable>
  );
}
