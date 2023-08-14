import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
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
  focusedBackgroundColor?: string;
  focusedBorderWidth?: number;
  focusedTextColor?: string;
  style?: StyleProp<ViewStyle | TextStyle>;
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
      focusedBorderColor,
      focusedBackgroundColor,
      focusedBorderWidth,
      focusedTextColor,
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
                  { borderColor: theme.colors.disabled },
                  viewStyles,
                  isFocused && focusedBorderWidth
                    ? { borderWidth: focusedBorderWidth }
                    : undefined,
                  isFocused && focusedBorderColor
                    ? { borderColor: focusedBorderColor }
                    : undefined,
                  isFocused && focusedBackgroundColor
                    ? { backgroundColor: focusedBackgroundColor }
                    : undefined,
                ]}
              >
                <PinInputText
                  style={[
                    styles.cellText,
                    { color: theme.colors.strong },
                    textStyles,
                    isFocused && focusedTextColor
                      ? { color: focusedTextColor }
                      : undefined,
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
    borderWidth: 1,
  },
  cellText: {
    fontSize: 25,
  },
});

export default withTheme(PinInput);
