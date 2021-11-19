import React from "react";
import { Pressable, ViewStyle, PressableProps } from "react-native";

type Props = {
  disabled?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
} & PressableProps;

export default function Touchable({
  children,
  disabled,
  onPress,
  style,
  ...props
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      hitSlop={8}
      style={({ pressed }) => {
        return [
          {
            opacity: pressed || disabled ? 0.75 : 1,
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
