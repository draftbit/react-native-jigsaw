import React from "react";
import {
  View,
  createElement,
  StyleSheet,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  children?: React.ReactNode;
  onLayout?: (event: LayoutChangeEvent) => void;
  ratio: number;
  style?: StyleProp<ViewStyle>;
}

const AspectRatio: React.FC<Props> = ({ children, onLayout, ratio, style }) => {
  const percentage = 100 / ratio;
  return (
    <View onLayout={onLayout} style={[styles.root, style]}>
      {createElement("div", {
        style: [styles.ratio, { paddingBottom: `${percentage}%` }],
      })}
      {createElement("div", {
        children,
        style: styles.content,
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
  },
  ratio: {
    width: "100%",
  },
  content: {
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

export default AspectRatio;
