import React from "react";
import {
  Pressable as NativePressable,
  PressableProps,
  ViewStyle,
} from "react-native";

type Props = {
  style?: ViewStyle;
  activeOpacity?: number;
  disabledOpacity?: number;
  androidRippleColor?: string;
  androidRippleBorderless?: boolean;
  androidRippleRadius?: number;
  androidRippleForeground?: boolean;
} & Omit<PressableProps, "android_ripple ">;

export default function Pressable({
  children,
  disabled,
  onPress,
  activeOpacity = 0.8,
  disabledOpacity = 0.8,
  delayLongPress,
  hitSlop,
  androidRippleColor,
  androidRippleBorderless,
  androidRippleRadius,
  androidRippleForeground,
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
      android_ripple={
        androidRippleColor ||
        androidRippleBorderless ||
        androidRippleColor ||
        androidRippleForeground
          ? {
              radius: androidRippleRadius,
              borderless: androidRippleBorderless,
              color: androidRippleColor,
              foreground: androidRippleForeground,
            }
          : null
      }
      {...props}
    >
      {children}
    </NativePressable>
  );
}
