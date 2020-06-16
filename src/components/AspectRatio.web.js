import React from "react";
import { View, createElement, StyleSheet } from "react-native";

export default class AspectRatio extends React.Component {
  static displayName = "AspectRatio";

  render() {
    const { children, onLayout, ratio, style } = this.props;
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
  }
}

const styles = StyleSheet.create({
  root: {
    display: "block",
    overflow: "hidden",
  },
  ratio: {
    display: "block",
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
