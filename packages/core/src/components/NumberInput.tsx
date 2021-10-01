import React from "react";
import { TextInput as NativeNumberInput } from "react-native";
import { usePrevious } from "../hooks";

interface Props {
  initialValue?: string;
  onChangeText: (value?: number) => void;
}

const NumberInput: React.FC<Props> = ({
  initialValue,
  onChangeText,
  ...props
}) => {
  const previousInitialValue = usePrevious(initialValue);
  React.useEffect(() => {
    if (initialValue !== previousInitialValue) {
      onChangeText(stringToInteger(initialValue));
    }
  }, [initialValue, previousInitialValue, onChangeText]);

  return (
    <NativeNumberInput
      keyboardType="numeric"
      onChangeText={(val) => onChangeText(stringToInteger(val))}
      {...props}
    />
  );
};

const stringToInteger = (str: string | undefined): number => {
  const number = parseFloat(str as string);
  return isNaN(number) ? 0 : number;
};

export default NumberInput;
