import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { isString, isNumber, isNaN } from "lodash";

interface Props {
  value?: number | string;
  defaultValue?: number | string;
  onChangeText?: (value?: number) => void;
}

const NumberInput = React.forwardRef<TextInput, Props>(
  ({ onChangeText, value, defaultValue, ...props }, ref) => {
    const [currentStringNumberValue, setCurrentStringNumberValue] =
      useState("");

    const formatValueToStringNumber = (valueToFormat?: number | string) => {
      if (valueToFormat != null) {
        if (isString(valueToFormat) && valueToFormat !== "") {
          if (/^0[1-9]$/.test(valueToFormat)) {
            return valueToFormat.slice(1);
          } else if (/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/.test(valueToFormat)) {
            return valueToFormat;
          } else {
            return currentStringNumberValue;
          }
        } else if (isNumber(valueToFormat) && !isNaN(valueToFormat)) {
          return valueToFormat.toString();
        }
      }

      return "";
    };

    const handleChangeText = (newValue: string) => {
      const newStringNumberValue = formatValueToStringNumber(newValue);
      const number = parseFloat(newStringNumberValue);

      setCurrentStringNumberValue(newStringNumberValue);
      onChangeText?.(number);
    };

    // run handleChangeText with value prop only when value prop changes (and first render to reset currentStringNumberValue)
    useEffect(() => {
      const nextStringNumberValue = formatValueToStringNumber(value);

      if (currentStringNumberValue !== nextStringNumberValue) {
        handleChangeText(nextStringNumberValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // set currentStringNumberValue as defaultValue prop if there is a differnce on first render only
    useEffect(() => {
      const defaultStringNumberValue = formatValueToStringNumber(defaultValue);

      if (currentStringNumberValue !== defaultStringNumberValue) {
        setCurrentStringNumberValue(defaultStringNumberValue);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <TextInput
        ref={ref}
        keyboardType="numeric"
        value={currentStringNumberValue}
        onChangeText={handleChangeText}
        {...props}
      />
    );
  }
);

export default NumberInput;
