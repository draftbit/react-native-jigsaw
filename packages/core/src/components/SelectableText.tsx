import React from "react";
import {
  Platform,
  TextInput,
  Text,
  TextStyle,
  I18nManager,
  StyleSheet,
  TextInputProps,
  TextProps,
  StyleProp,
} from "react-native";

type Props = {
  style?: StyleProp<TextStyle>;
  text?: string;
} & (TextInputProps | TextProps);

const SelectableText: React.FC<Props> = ({ style, text, ...rest }) => {
  const writingDirection: "auto" | "ltr" | "rtl" = I18nManager.isRTL
    ? "rtl"
    : "ltr";

  const baseStyle = [styles.baseText, { writingDirection }, style];
  if (Platform.OS === "ios") {
    return (
      <TextInput
        {...rest}
        value={text}
        editable={false}
        scrollEnabled={false}
        multiline
        style={baseStyle}
      />
    );
  }
  return (
    <Text {...rest} selectable style={baseStyle}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    textAlign: "left",
  },
});

export default SelectableText;
