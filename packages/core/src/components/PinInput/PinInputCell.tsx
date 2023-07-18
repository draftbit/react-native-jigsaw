import React from "react";
import { StyleProp, ViewStyle, View, StyleSheet } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import PinInputText from "./PinInputText";

interface PinInputCellProps {
  style?: StyleProp<ViewStyle>;
}

const PinInputCell: React.FC<React.PropsWithChildren<PinInputCellProps>> = ({
  style,
  children,
}) => {
  return <View style={[styles.cell, style]} children={children} />;
};

interface DefaultPinInputCellProps {
  cellValue: string;
  isFocused: boolean;
  theme: Theme;
}

export const DefaultPinInputCell = withTheme(
  ({ cellValue, isFocused, theme }: DefaultPinInputCellProps) => {
    return (
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

export default PinInputCell;
