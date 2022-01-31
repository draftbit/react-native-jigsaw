import React, { FC, useCallback, useState } from "react";
import { TextInput } from "react-native";
import { isString, isNumber, isNaN } from "lodash";

interface Props {
  value?: number | string;
  defaultValue?: number | string;
  onChangeText?: (value?: number) => void;
}

const NumberInput: FC<Props> = ({
  onChangeText,
  value,
  defaultValue,
  ...props
}) => {
  const formatValueToStringNumber = useCallback(
    (valueToFormat?: number | string, currentStringNumberValue?: string) => {
      if (valueToFormat != null) {
        if (isString(valueToFormat)) {
          if (/^0[1-9]$/.test(valueToFormat)) {
            return valueToFormat.slice(1);
          } else if (/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(valueToFormat)) {
            return valueToFormat;
          } else if (currentStringNumberValue) {
            return currentStringNumberValue;
          }
        } else if (isNumber(valueToFormat) && !isNaN(valueToFormat)) {
          return valueToFormat.toString();
        }
      }

      return "0";
    },
    []
  );

  const [stringNumberValue, setStringNumberValue] = useState(
    formatValueToStringNumber(value)
  );

  const handleChangeText = (newValue: string) => {
    const newStringNumberValue = formatValueToStringNumber(
      newValue,
      stringNumberValue
    );
    const number = parseFloat(newStringNumberValue);

    setStringNumberValue(newStringNumberValue);
    onChangeText?.(number);
  };

  return (
    <TextInput
      keyboardType="numeric"
      {...props}
      value={stringNumberValue}
      defaultValue={formatValueToStringNumber(defaultValue)}
      onChangeText={handleChangeText}
    />
  );
};

export default NumberInput;
