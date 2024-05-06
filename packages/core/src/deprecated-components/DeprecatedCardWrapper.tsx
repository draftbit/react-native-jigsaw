import React from "react";
import { withTheme } from "@draftbit/theme";
import Touchable from "../components/Touchable";
import { StyleProp, ViewStyle } from "react-native";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  numColumns?: number;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
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

/**
 * @deprecated DEPRECATED
 */
const Card: React.FC<React.PropsWithChildren<Props>> = ({
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
