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
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

//TODO: Pass down styles to the default cell
const PinInput = React.forwardRef<NativeTextInput, PinInputProps>(
  (
    {
      onInputFull,
      cellCount = 4,
      clearOnCellFocus = true,
      blurOnFull = true,
      renderItem,
      value,
      onChangeText,
      style,
      theme,
      ...rest
    },
    ref
  ) => {
    const newPinInputRef = React.useRef<NativeTextInput>(null);

    // Use the provided ref or default to new ref when not provided
    const PinInputRef = ref
      ? (ref as React.RefObject<NativeTextInput>)
      : newPinInputRef;

    // Clears input of a cell when focused, configured as explained here (https://github.com/retyui/react-native-confirmation-code-field/blob/master/API.md#useclearbyfocuscellvalue-string-setvalue-text-string--void)
    const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
      value,
      setValue: (text) => onChangeText?.(text),
    });

    React.useEffect(() => {
      if (value?.length === cellCount) {
        if (blurOnFull) {
          PinInputRef.current?.blur();
        }
        onInputFull?.(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, cellCount, blurOnFull, PinInputRef]);

    return (
      <CodeField
        ref={PinInputRef}
        {...(clearOnCellFocus ? codeFieldProps : {})}
        value={value}
        onChangeText={onChangeText}
        rootStyle={style}
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
                  styles.defaultCellContainer,
                  {
                    borderWidth: isFocused ? 2 : 1,
                    borderColor: isFocused
                      ? theme.colors.primary
                      : theme.colors.disabled,
                  },
                ]}
              >
                <PinInputText
                  style={[
                    styles.defaultCellText,
                    {
                      color: theme.colors.strong,
                    },
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
  cell: { marginStart: 5, marginEnd: 5 },
  defaultCellContainer: {
    padding: 5,
    backgroundColor: "transparent",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    maxWidth: 70,
    maxHeight: 70,
  },
  defaultCellText: {
    fontSize: 25,
  },
});

export default withTheme(PinInput);
