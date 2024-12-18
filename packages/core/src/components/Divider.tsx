import * as React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  theme: ReadTheme;
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
          backgroundColor: color || colors.border.base,
          height: StyleSheet.hairlineWidth,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default withTheme(Divider);
