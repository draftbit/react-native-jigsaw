import React from "react";
import { TextInput as NativeNumberInput } from "react-native";

interface Props {
  defaultValue?: string;
  onChangeText: (value?: number) => void;
}

const NumberInput: React.FC<Props> = ({
  defaultValue,
  onChangeText,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (defaultValue != null) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue]);

  const handleChangeText = (value: string) => {
    setInternalValue(value);
    if (onChangeText) {
      onChangeText(stringToInteger(value));
    }
  };

  return (
    <NativeNumberInput
      keyboardType="numeric"
      onChangeText={handleChangeText}
      {...props}
      value={internalValue}
    />
  );
};

const stringToInteger = (str: string | undefined): number => {
  const number = parseFloat(str as string);
  return isNaN(number) ? 0 : number;
};

export default NumberInput;

// comment to try to fix sourcemap issue
