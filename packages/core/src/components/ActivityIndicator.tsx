import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  ActivityIndicator as ActivityIndicatorRN,
} from "react-native";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

type Props = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  theme: ReadTheme;
};

const ActivityIndicator: React.FC<React.PropsWithChildren<Props>> = ({
  style,
  color,
  theme: { colors },
  ...rest
}) => {
  return (
    <ActivityIndicatorRN
      animating={true}
      hidesWhenStopped={true}
      size={"small"}
      style={[
        {
          backgroundColor: color || colors.border.brand,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default withTheme(ActivityIndicator);
