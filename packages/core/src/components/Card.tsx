import React from "react";
import { withTheme } from "../theming";
import Touchable from "./Touchable";
import { StyleProp, ViewStyle } from "react-native";
import theme from "../styles/DefaultTheme";

type Props = {
  numColumns?: number;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
};

const getWidth = (numColumns: number) => {
  switch (numColumns) {
    case 1:
      return "33%";
    case 2:
      return "50%";
    default:
      return "100%";
  }
};

const Card: React.FC<Props> = ({
  numColumns = 3,
  children,
  onPress,
  style,
  ...rest
}) => {
  const width = getWidth(numColumns);
  return (
    <Touchable
      disabled={!onPress}
      onPress={onPress}
      style={[style, { width }]}
      {...rest}
    >
      {children}
    </Touchable>
  );
};

export default withTheme(Card);
