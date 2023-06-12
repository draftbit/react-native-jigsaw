import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextInput as NativeTextInput,
  View,
} from "react-native";
import TextInput, { TextInputProps } from "../TextInput";
import {
  CodeField,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { DefaultCodeInputCell } from "./CodeInputCell";

interface CellItem {
  cellValue: string;
  index: number;
  isFocused: boolean;
}

interface CodeInputProps extends TextInputProps {
  cellCount?: number;
  clearOnCellFocus?: boolean;
  blurOnFull?: boolean;
  renderItem?: ({ cellValue, index, isFocused }: CellItem) => JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const CodeInput = React.forwardRef<NativeTextInput, CodeInputProps>(
  (
    {
      cellCount = 4,
      clearOnCellFocus = true,
      blurOnFull = true,
      renderItem,
      value,
      onChangeText,
      style,
      ...rest
    },
    ref
  ) => {
    const newCodeInputRef = React.useRef<NativeTextInput>(null);

    // Use the provided ref or default to new ref when not provided
    const codeInputRef = ref
      ? (ref as React.RefObject<NativeTextInput>)
      : newCodeInputRef;

    // Clears input of a cell when focused, configured as explained here (https://github.com/retyui/react-native-confirmation-code-field/blob/master/API.md#useclearbyfocuscellvalue-string-setvalue-text-string--void)
    const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
      value,
      setValue: (text) => onChangeText?.(text),
    });

    React.useEffect(() => {
      if (blurOnFull && value?.length === cellCount) {
        codeInputRef.current?.blur();
      }
    }, [value, cellCount, blurOnFull, codeInputRef]);

    return (
      <CodeField
        {...(clearOnCellFocus ? codeFieldProps : {})}
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        rootStyle={style}
        InputComponent={TextInput}
        cellCount={cellCount}
        renderCell={({ symbol, index, isFocused }) => (
          <View
            key={index}
            onLayout={clearOnCellFocus ? getCellOnLayout(index) : undefined}
            style={{ flex: 1 }}
          >
            {renderItem?.({ cellValue: symbol, index, isFocused }) || (
              <DefaultCodeInputCell cellValue={symbol} isFocused={isFocused} />
            )}
          </View>
        )}
        {...rest}
      />
    );
  }
);

export default CodeInput;
