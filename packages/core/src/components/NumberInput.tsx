import React, { useCallback, useEffect, useState } from "react";
import { TextInput } from "react-native";
import { isString, isNumber } from "lodash";

interface Props {
  value?: number | string;
  defaultValue?: number | string;
  onChangeText?: (value?: number) => void;
}

const NumberInput: React.FC<Props> = ({
  onChangeText,
  value,
  defaultValue,
  ...props
}) => {
  const [isDecimal, setIsDecimal] = useState(value && !Number.isInteger(value));
  const [internalValue, setInternalValue] = useState(0);

  const realValue = value != null ? value : internalValue;

  const formatValueToString = useCallback(
    (valueToStringify?: number | string) => {
      if (valueToStringify != null) {
        if (
          isString(valueToStringify) &&
          /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(valueToStringify)
        ) {
          return valueToStringify;
        } else if (isNumber(valueToStringify)) {
          return valueToStringify.toString();
        }
      }

      return "";
    },
    []
  );

  useEffect(() => {
    setIsDecimal(formatValueToString(realValue).includes("."));
  }, [realValue, formatValueToString]);

  const formatDisplayValue = (displayValue?: number | string) => {
    let stringValue = formatValueToString(displayValue);

    if (isDecimal && !stringValue.includes(".")) {
      stringValue = `${stringValue}.`;
    }

    return stringValue;
  };

  const handleChangeText = (newValue: string) => {
    const parsedNumber = parseFloat(newValue);
    const number = isNaN(parsedNumber) ? 0 : parsedNumber;

    setIsDecimal(newValue.includes("."));
    setInternalValue(number);
    onChangeText?.(number);
  };

  return (
    <TextInput
      keyboardType="numeric"
      {...props}
      value={formatDisplayValue(realValue)}
      defaultValue={formatDisplayValue(defaultValue)}
      onChangeText={handleChangeText}
    />
  );
};

export default NumberInput;
