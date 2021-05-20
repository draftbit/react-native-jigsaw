import React from "react";
import { Pressable, ViewStyle, PressableProps } from "react-native";

import { COMPONENT_TYPES, createActionProp } from "@draftbit/types";

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

export const SEED_DATA = {
  name: "Touchable",
  tag: "Touchable",
  description: "Simple button with no styles",
  category: COMPONENT_TYPES.button,
  layout: {},
  props: {
    onPress: createActionProp(),
  },
};
