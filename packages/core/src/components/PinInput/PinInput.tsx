import React from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput as NativeTextInput,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import TextInput, { TextInputProps } from "../TextInput";
import {
  CodeField,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import type { ReadTheme } from "@draftbit/theme";
import { withTheme } from "@draftbit/theme";
import PinInputText from "./PinInputText";
import { extractStyles } from "../../utilities";

interface CellItem {
  cellValue: string;
  index: number;
  isFocused: boolean;
}

interface PinInputProps extends Omit<TextInputProps, "style"> {
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
  theme: ReadTheme;
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
      focusedBorderColor = theme.colors.branding.primary,
      focusedBackgroundColor,
      focusedBorderWidth,
      focusedTextColor,
      secureTextEntry,
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

    const renderCell = (
      cellValue: string,
      index: number,
      isFocused: boolean
    ) => {
      if (secureTextEntry && cellValue) {
        cellValue = "•";
      }
      const cell = renderItem?.({ cellValue, index, isFocused }) || (
        <View
          testID="default-code-input-cell"
          style={[
            styles.cell,
            { borderColor: theme.colors.border.base },
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
              { color: theme.colors.text.strong },
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
      );

      return React.cloneElement(cell, {
        onLayout: clearOnCellFocus ? getCellOnLayout(index) : undefined,
      });
    };

    return (
      <CodeField
        ref={pinInputRef}
        {...(clearOnCellFocus ? codeFieldProps : {})}
        value={value}
        onChangeText={onChangeText}
        rootStyle={styles.rootContainer}
        textInputStyle={[
          // addresses issue on firefox where the hidden input did not fill the height
          { height: "100%" },
          //@ts-ignore Web specific prop. Removes default blue outline that appears on the hidden TextInput
          Platform.OS === "web" ? { outlineWidth: 0 } : {},
        ]}
        InputComponent={TextInput}
        cellCount={cellCount}
        renderCell={({ symbol: cellValue, index, isFocused }) => (
          <React.Fragment key={index}>
            {renderCell(cellValue, index, isFocused)}
          </React.Fragment>
        )}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    );
  }
);

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
  },
  cell: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
    maxWidth: 70,
    maxHeight: 70,
    borderWidth: 1,
    flex: 1,
  },
  cellText: {
    fontSize: 25,
  },
});

export default withTheme(PinInput);
