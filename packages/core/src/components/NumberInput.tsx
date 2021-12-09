import React from "react";
import { TextInput } from "react-native";

interface Props {
  value?: number;
  defaultValue?: number;
  onChangeText: (value?: number) => void;
}

const getValue = (
  valueFromProp: number | undefined,
  defaultValue: number | undefined
) => {
  let value = valueFromProp ?? defaultValue;
  if (typeof value !== "number" || Number.isNaN(value)) {
    value = 0;
  }
  return value;
};

const NumberInput: React.FC<Props> = ({
  onChangeText,
  value: valueFromProp,
  defaultValue,
  ...props
}) => {
  const value = getValue(valueFromProp, defaultValue);
  const [isDecimal, setIsDecimal] = React.useState(!Number.isInteger(value));
  React.useEffect(() => {
    const newValue = getValue(valueFromProp, defaultValue);
    setIsDecimal(newValue.toString().includes("."));
  }, [valueFromProp, defaultValue]);

  const handleChangeText = (newValue: string) => {
    if (onChangeText) {
      const parsedNumber = parseFloat(newValue);
      const number = isNaN(parsedNumber) ? 0 : parsedNumber;
      setIsDecimal(newValue.includes("."));
      onChangeText(number);
    }
  };

  let strValue: string = value.toString();
  if (isDecimal && !strValue.includes(".")) {
    strValue = `${strValue}.`;
  }

  return (
    <TextInput
      keyboardType="numeric"
      {...props}
      value={valueFromProp !== undefined ? strValue : undefined}
      defaultValue={defaultValue !== undefined ? strValue : undefined}
      onChangeText={handleChangeText}
    />
  );
};

export default NumberInput;

// comment to try to fix sourcemap issue
