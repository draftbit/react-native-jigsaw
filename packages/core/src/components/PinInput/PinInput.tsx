import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextInput as NativeTextInput,
  View,
  StyleSheet,
} from "react-native";
import TextInput, { TextInputProps } from "../TextInput";
import {
  CodeField,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import PinInputText from "./PinInputText";
import { extractStyles } from "../../utilities";

interface CellItem {
  cellValue: string;
  index: number;
  isFocused: boolean;
}

interface PinInputProps extends TextInputProps {
  onInputFull?: (value: string) => void;
  cellCount?: number;
  clearOnCellFocus?: boolean;
  blurOnFull?: boolean;
  renderItem?: ({ cellValue, index, isFocused }: CellItem) => JSX.Element;
  focusedBorderColor?: string;
  unFocusedBorderColor?: string;
  focusedBackgroundColor?: string;
  unFocusedBackgroundColor?: string;
  focusedBorderWidth?: number;
  unFocusedBorderWidth?: number;
  focusedTextColor?: string;
  unFocusedTextColor?: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const PinInput = React.forwardRef<NativeTextInput, PinInputProps>(
  (
    {
      theme,
      onInputFull,
      cellCount = 4,
      clearOnCellFocus = true,
      blurOnFull = true,
      renderItem,
      value,
      onChangeText,
      focusedBorderColor = theme.colors.primary,
      unFocusedBorderColor = theme.colors.disabled,
      focusedBackgroundColor,
      unFocusedBackgroundColor,
      focusedBorderWidth = 2,
      unFocusedBorderWidth = 1,
      focusedTextColor = theme.colors.strong,
      unFocusedTextColor = focusedTextColor,
      style,
      ...rest
    },
    ref
  ) => {
    const newPinInputRef = React.useRef<NativeTextInput>(null);

    // Use the provided ref or default to new ref when not provided
    const pinInputRef = ref
      ? (ref as React.RefObject<NativeTextInput>)
      : newPinInputRef;

    const { viewStyles, textStyles } = extractStyles(style);

    // Clears input of a cell when focused, configured as explained here (https://github.com/retyui/react-native-confirmation-code-field/blob/master/API.md#useclearbyfocuscellvalue-string-setvalue-text-string--void)
    const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
      value,
      setValue: (text) => onChangeText?.(text),
    });

    React.useEffect(() => {
      if (value?.length === cellCount) {
        if (blurOnFull) {
          pinInputRef.current?.blur();
        }
        onInputFull?.(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, cellCount, blurOnFull, pinInputRef]);

    return (
      <CodeField
        ref={pinInputRef}
        {...(clearOnCellFocus ? codeFieldProps : {})}
        value={value}
        onChangeText={onChangeText}
        textInputStyle={{ height: "100%" }} // addresses issue on firefox where the hidden input did not fill the height
        InputComponent={TextInput}
        cellCount={cellCount}
        renderCell={({ symbol: cellValue, index, isFocused }) => (
          <View
            key={index}
            onLayout={clearOnCellFocus ? getCellOnLayout(index) : undefined}
            style={{ flex: 1 }}
          >
            {renderItem?.({ cellValue, index, isFocused }) || (
              <View
                testID="default-code-input-cell"
                style={[
                  styles.cell,
                  {
                    borderWidth: isFocused
                      ? focusedBorderWidth
                      : unFocusedBorderWidth,
                    borderColor: isFocused
                      ? focusedBorderColor
                      : unFocusedBorderColor,
                    backgroundColor: isFocused
                      ? focusedBackgroundColor
                      : unFocusedBackgroundColor,
                  },
                  viewStyles,
                ]}
              >
                <PinInputText
                  style={[
                    styles.cellText,
                    {
                      color: isFocused ? focusedTextColor : unFocusedTextColor,
                    },
                    textStyles,
                  ]}
                  isFocused={isFocused}
                >
                  {cellValue}
                </PinInputText>
              </View>
            )}
          </View>
        )}
        {...rest}
      />
    );
  }
);

const styles = StyleSheet.create({
  cell: {
    marginStart: 5,
    marginEnd: 5,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    maxWidth: 70,
    maxHeight: 70,
  },
  cellText: {
    fontSize: 25,
  },
});

export default withTheme(PinInput);
