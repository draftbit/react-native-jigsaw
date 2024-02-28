import React from "react";
import { View, StyleSheet } from "react-native";
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
  selectedValue?: string | number | (string | number)[];
  options: PickerOption[];
  zIndex?: number;
  onPress?: () => void;
  testID?: string;
}

const PickerInputContainer: React.FC<
  React.PropsWithChildren<PickerInputContainerProps>
> = ({
  options = [],
  onPress,
  Icon,
  style,
  selectedValue,
  disabled = false,
  zIndex,
  children,
  testID,
  ...rest
}) => {
  const containerStyle = StyleSheet.flatten([
    extractSizeStyles(style),
    extractPositionStyles(style),
    extractFlexItemStyles(style),
    extractBorderAndMarginStyles(style).marginStyles,
  ]);

  // const textFieldStyle = omit(
  //   StyleSheet.flatten(style),
  //   Object.keys(containerStyle)
  // );

  let selectedLabel: string | number | undefined = "";
  if (Array.isArray(selectedValue)) {
    selectedLabel = selectedValue
      .map(
        (value) =>
          options
            .find((option) => option.value.toString() === value.toString())
            ?.label.toString() || value
      )
      .join(", ");
  } else {
    selectedLabel =
      options
        .find((option) => option.value.toString() === selectedValue?.toString())
        ?.label.toString() || selectedValue;
  }

  return (
    <View testID={testID} style={[containerStyle, { zIndex }]}>
      <TextField
        Icon={Icon}
        numberOfLines={1}
        onChangeText={() => {}}
        value={selectedLabel?.toString()}
        editable={false}
        disabled={disabled}
        style={{ backgroundColor: "red" }}
        {...rest}
      />
      <Touchable
        style={StyleSheet.absoluteFillObject}
        disabled={disabled}
        onPress={onPress}
        onLongPress={onPress}
      />
      {children}
    </View>
  );
};

export default PickerInputContainer;
