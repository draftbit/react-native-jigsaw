import * as React from "react";
import { Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import { withTheme } from "@draftbit/theme";
import type { Theme } from "@draftbit/theme";
import { colorTypes } from "@draftbit/theme";

type Props = {
  progress?: number;
  style?: StyleProp<ViewStyle>;
  color?: colorTypes;
  size?: number;
  showsText?: boolean;
  unfilledColor?: colorTypes;
  strokeCap?: "butt" | "square" | "round" | undefined;
  textStyle?: StyleProp<TextStyle>;
  thickness?: number;
  theme: Theme;
};

/**
 * @deprecated DEPRECATED
 */
const ProgressCircle: React.FC<React.PropsWithChildren<Props>> = ({
  progress = 0.5,
  style,
  color = "primary",
  size = 100,
  showsText = true,
  unfilledColor,
  strokeCap = "butt",
  textStyle,
  thickness = 1,
  theme,
}) => {
  const progressNum = Math.round(progress * 100);

  const tintColor = color || theme.colors.primary;
  const backgroundColor = unfilledColor || theme.colors.secondary;

  return (
    <AnimatedCircularProgress
      size={size}
      width={thickness}
      backgroundWidth={thickness}
      fill={progressNum}
      tintColor={tintColor}
      backgroundColor={backgroundColor}
      rotation={0}
      lineCap={strokeCap}
      style={style}
    >
      {/* @ts-ignore */}
      {(fill) =>
        showsText ? (
          <Text
            style={[{ fontSize: size * 0.275, color: tintColor }, textStyle]}
          >
            {Math.round(fill)}%
          </Text>
        ) : null
      }
    </AnimatedCircularProgress>
  );
};

export default withTheme(ProgressCircle);
