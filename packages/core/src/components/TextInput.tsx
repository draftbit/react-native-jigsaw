import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  Platform,
} from "react-native";
import { useDebounce, useOnUpdate } from "../hooks";
import { useTheme } from "@draftbit/theme";

export interface TextInputProps extends NativeTextInputProps {
  webShowOutline?: boolean;
  onChangeTextDelayed?: (text: string) => void;
  changeTextDelay?: number;
  disabled?: boolean;
}

const TextInput = React.forwardRef<NativeTextInput, TextInputProps>(
  (
    {
      onChangeTextDelayed,
      changeTextDelay = 500,
      webShowOutline = true,
      style,
      disabled = false,
      editable = true,
      value,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const delayedValue = useDebounce(value, changeTextDelay);

    useOnUpdate(() => {
      if (delayedValue !== undefined) {
        onChangeTextDelayed?.(delayedValue);
      }
    }, [delayedValue]);

    return (
      <NativeTextInput
        testID="native-text-input"
        ref={ref}
        value={value}
        editable={!disabled && editable}
        style={[
          //@ts-ignore Web specific prop. Removes default blue outline that appears on the hidden TextInput
          Platform.OS === "web" && !webShowOutline ? { outlineWidth: 0 } : {},
          { color: theme.colors.text.strong },
          style,
        ]}
        {...rest}
      />
    );
  }
);

export default TextInput;
