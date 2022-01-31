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
  value = "",
  defaultValue = "",
  ...props
}) => {
  const [isDecimal, setIsDecimal] = useState(value && !Number.isInteger(value));

  const formatValueToString = useCallback(
    (valueToStringify?: number | string) => {
      if (valueToStringify != null) {
        if (
          isString(valueToStringify) &&
          /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(valueToStringify)
        ) {
          console.log("is string", value);
          return valueToStringify;
        } else if (isNumber(valueToStringify)) {
          return valueToStringify.toString();
        }
      }

      return "";
    },
    [value]
  );

  useEffect(() => {
    if (value) {
      setIsDecimal(formatValueToString(value).includes("."));
    }
  }, [value, formatValueToString]);

  const makeFinalValue = (valueToMakeFinal?: number | string) => {
    let stringValue = formatValueToString(valueToMakeFinal);

    if (isDecimal && !stringValue.includes(".")) {
      stringValue = `${stringValue}.`;
    }

    return stringValue;
  };

  const handleChangeText = (newValue: string) => {
    const parsedNumber = parseFloat(newValue);
    const number = isNaN(parsedNumber) ? 0 : parsedNumber;

    setIsDecimal(newValue.includes("."));
    onChangeText?.(number);
  };

  return (
    <TextInput
      keyboardType="numeric"
      {...props}
      value={makeFinalValue(value)}
      defaultValue={makeFinalValue(defaultValue)}
      onChangeText={handleChangeText}
    />
  );
};

export default NumberInput;
