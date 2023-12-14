import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import { useDebounce, useOnUpdate } from "../hooks";

export interface TextInputProps extends NativeTextInputProps {
  onChangeTextDelayed?: (text: string) => void;
  changeTextDelay?: number;
}

const TextInput = React.forwardRef<NativeTextInput, TextInputProps>(
  ({ onChangeTextDelayed, changeTextDelay = 500, value, ...rest }, ref) => {
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
        {...rest}
      />
    );
  }
);

export default TextInput;
