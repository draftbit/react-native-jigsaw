import React from "react";
import { TextInput as NativeTextInput } from "react-native";
import { usePrevious } from "../hooks";

interface Props {
  initialValue?: string;
  onChangeText: (value?: string) => void;
}

const TextInput: React.FC<Props> = ({
  initialValue,
  onChangeText,
  ...props
}) => {
  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onChangeText(initialValue);
    }
  }, [initialValue, previousInitialValue, onChangeText]);

  return <NativeTextInput onChangeText={onChangeText} {...props} />;
};

export default TextInput;
