import React from "react";
import {
  View,
  ViewProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import type { ReadTheme } from "@draftbit/theme";
import { withTheme } from "@draftbit/theme";

export interface DeckSwiperCardProps
  extends Omit<ViewProps, "style" | "children"> {
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
}

const DeckSwiperCard: React.FC<
  React.PropsWithChildren<DeckSwiperCardProps>
> = ({ style, children, theme, ...rest }) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: theme.colors.background.base,
        borderColor: theme.colors.border.base,
      },
      style,
    ]}
    {...rest}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 2,
  },
});

export default withTheme(DeckSwiperCard);
