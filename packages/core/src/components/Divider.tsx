import * as React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "../theming";
import theme from "../styles/DefaultTheme";

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  theme: typeof theme;
};

const Divider: React.FC<React.PropsWithChildren<Props>> = ({
  style,
  color,
  theme: { colors },
  ...rest
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: color || colors.divider,
          height: StyleSheet.hairlineWidth,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default withTheme(Divider);
