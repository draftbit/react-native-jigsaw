import React, { useCallback } from "react";
import {
  Pressable as NativePressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
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
  pressRetentionOffset?: number;
  activeOpacity?: number;
  disabledOpacity?: number;
} & PressableProps;

export type StyleType = (
  state: PressableStateCallbackType
) => StyleProp<ViewStyle>;

export default function Pressable({
  children,
  disabled,
  onPress,
  onLongPress,
  hitSlop,
  delayLongPress,
  activeOpacity,
  disabledOpacity,
  style,
  ...props
}: Props) {
  const getOpacity = useCallback(
    (pressed: boolean) => {
      if (disabled) {
        return disabledOpacity;
      } else {
        if (pressed) return activeOpacity;
        else return 1;
      }
    },
    [activeOpacity, disabled, disabledOpacity]
  );
  const _style = useCallback<StyleType>(
    ({ pressed }) => [style as ViewStyle, { opacity: getOpacity(pressed) }],
    [getOpacity, style]
  );
  return (
    <NativePressable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      delayLongPress={delayLongPress ? delayLongPress : 500}
      hitSlop={hitSlop ? hitSlop : 8}
      style={_style}
      {...props}
    >
      {children}
    </NativePressable>
  );
}
