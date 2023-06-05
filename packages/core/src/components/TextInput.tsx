import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import { useDebounce } from "../hooks";

export interface TextInputProps extends NativeTextInputProps {
  onChangeTextDelayed?: (text: string) => void;
  changeTextDelay?: number;
}

const TextInput = React.forwardRef<NativeTextInput, TextInputProps>(
  ({ onChangeTextDelayed, changeTextDelay = 500, value, ...rest }, ref) => {
    const delayedValue = useDebounce(value, changeTextDelay);

    React.useEffect(() => {
      if (delayedValue !== undefined) {
        onChangeTextDelayed?.(delayedValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
