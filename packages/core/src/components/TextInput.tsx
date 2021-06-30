import React from "react";
import { TextInput as NativeTextInput } from "react-native";

interface Props {
  initialValue?: string;
  onChangeText: (value?: string) => void;
}

const TextInput: React.FC<Props> = ({
  initialValue,
  onChangeText,
  ...props
}) => {
  React.useEffect(() => onChangeText(initialValue), [initialValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return <NativeTextInput onChangeText={onChangeText} {...props} />;
};

export default TextInput;
