import React from "react";
import { Text, TextProps } from "react-native";
import type { ReadTheme } from "@draftbit/theme";
import { withTheme } from "@draftbit/theme";
import { Cursor } from "react-native-confirmation-code-field";

interface CustomPinInputTextProps extends TextProps {
  cursorBlinkDuration?: number;
  cursorText?: string;
  isFocused?: boolean;
  theme: ReadTheme;
}

/**
 * Text component that can conditionally render a blinking cursor when focused and empty
 * Meant to be used within a CustomPinInputCell component
 */
const CustomPinInputText: React.FC<CustomPinInputTextProps> = ({
  isFocused,
  cursorBlinkDuration,
  cursorText,
  style,
  theme,
  children,
  ...rest
}) => {
  return (
    <Text style={[{ color: theme.colors.text.strong }, style]} {...rest}>
      {children ||
        (isFocused ? (
          <Cursor cursorSymbol={cursorText} delay={cursorBlinkDuration} />
        ) : null)}
    </Text>
  );
};

export default withTheme(CustomPinInputText);
