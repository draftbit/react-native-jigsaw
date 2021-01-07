import React from "react";
import {
  View,
  StyleSheet,
  LayoutRectangle,
  StyleProp,
  ViewStyle,
} from "react-native";

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const AspectRatio: React.FC<Props> = (props) => {
  const [layout, setLayout] = React.useState<LayoutRectangle | null>(null);
  const { aspectRatio = 1, ...inputStyle } =
    StyleSheet.flatten(props.style) || {};
  const style = [inputStyle, { aspectRatio }];

  if (layout) {
    const { width = 0, height = 0 } = layout;
    if (width === 0) {
      style.push({ width: height * (1 / aspectRatio), height });
    } else {
      style.push({ width, height: width * (1 / aspectRatio) });
    }
  }
  return (
    <View
      {...props}
      style={style}
      onLayout={({ nativeEvent: { layout: l } }) => setLayout(l)}
    >
      {props.children}
    </View>
  );
};

export default AspectRatio;
