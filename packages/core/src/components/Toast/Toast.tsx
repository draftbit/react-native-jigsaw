import React from "react";
import { StyleProp, TextStyle, ViewStyle, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { extractBorderAndMarginStyles } from "../../utilities";

type Props = {
  visible: boolean;
  title: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const Toast: React.FC<React.PropsWithChildren<Props>> = ({
  visible = false,
  title,
  style,
  labelStyle,
}) => {
  if (!visible) return null;
  const containerStyle = StyleSheet.flatten([
    extractBorderAndMarginStyles(style).marginStyles,
  ]);
  return (
    <View style={containerStyle}>
      <Text style={[labelStyle]}>{title}</Text>
    </View>
  );
};

export default Toast;
