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
  className?: string;
  theme: ReadTheme;
}

const DeckSwiperCard: React.FC<
  React.PropsWithChildren<DeckSwiperCardProps>
> = ({ style, className, children, theme, ...rest }) => (
  <View
    style={[
      styles.card,
      !className && {
        backgroundColor: theme.colors.background.base,
        borderColor: theme.colors.border.base,
      },
      style,
    ]}
    // @ts-ignore
    className={className}
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
