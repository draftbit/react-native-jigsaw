import React, { FC, useEffect, useState } from "react";
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
  const formatValueToStringNumber = (
    valueToFormat?: number | string,
    currentStringNumberValue?: string
  ) => {
    if (valueToFormat != null) {
      if (isString(valueToFormat) && valueToFormat !== "") {
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
  };

  const [currentStringNumberValue, setCurrentStringNumberValue] = useState(
    formatValueToStringNumber(value)
  );

  const handleChangeText = (newValue: string) => {
    const newStringNumberValue = formatValueToStringNumber(
      newValue,
      currentStringNumberValue
    );
    const number = parseFloat(newStringNumberValue);

    setCurrentStringNumberValue(newStringNumberValue);
    onChangeText?.(number);
  };

  /* set currentStringNumberValue directly to defaultValue if it exists on load
  ( no need to use TextInput's defaultValue because its value is always controlled & set ) */
  useEffect(() => {
    const defaultStringNumberValue = formatValueToStringNumber(
      defaultValue,
      currentStringNumberValue
    );

    if (currentStringNumberValue !== defaultStringNumberValue) {
      setCurrentStringNumberValue(defaultStringNumberValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // set new value if different from current value
  useEffect(() => {
    const nextStringNumberValue = formatValueToStringNumber(
      value,
      currentStringNumberValue
    );

    if (currentStringNumberValue !== nextStringNumberValue) {
      handleChangeText(nextStringNumberValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <TextInput
      keyboardType="numeric"
      value={currentStringNumberValue}
      onChangeText={handleChangeText}
      {...props}
    />
  );
};

export default NumberInput;
