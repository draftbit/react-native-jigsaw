import React from "react";
import { View, StyleSheet } from "react-native";
import omit from "lodash.omit";
import {
  extractSizeStyles,
  extractPositionStyles,
  extractFlexItemStyles,
  extractBorderAndMarginStyles,
} from "../../utilities";
import TextField from "../TextField";
import Touchable from "../Touchable";
import {
  PickerInputContainerProps as ExposedPickerInputContainerProps,
  PickerOption,
} from "./PickerCommon";

interface PickerInputContainerProps extends ExposedPickerInputContainerProps {
  selectedValue?: string | number;
  options: PickerOption[];
  onPress?: () => void;
}

const PickerInputContainer: React.FC<
  React.PropsWithChildren<PickerInputContainerProps>
> = ({
  options = [],
  onPress,
  Icon,
  style,
  placeholder,
  selectedValue,
  disabled = false,
  children,
  ...rest
}) => {
  const containerStyle = StyleSheet.flatten([
    extractSizeStyles(style),
    extractPositionStyles(style),
    extractFlexItemStyles(style),
    extractBorderAndMarginStyles(style).marginStyles,
  ]);

  const textFieldStyle = omit(
    StyleSheet.flatten(style),
    Object.keys(containerStyle)
  );

  const selectedLabel =
    options
      .find((option) => option.value === selectedValue)
      ?.label.toString() ||
    selectedValue ||
    placeholder;

  return (
    <View style={containerStyle}>
      <Touchable disabled={disabled} onPress={onPress}>
        <TextField
          Icon={Icon}
          numberOfLines={1}
          onChangeText={() => {}}
          value={selectedLabel?.toString()}
          editable={false}
          disabled={disabled}
          style={textFieldStyle}
          {...rest}
        />
      </Touchable>
      {children}
    </View>
  );
};

export default PickerInputContainer;
