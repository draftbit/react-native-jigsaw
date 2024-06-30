import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import type { ReadTheme } from "@draftbit/theme";
import { withTheme } from "@draftbit/theme";

export interface DeckSwiperCardProps {
  style?: StyleProp<ViewStyle>;
  theme: ReadTheme;
}

const DeckSwiperCard: React.FC<
  React.PropsWithChildren<DeckSwiperCardProps>
> = ({ style, children, theme }) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: theme.colors.background.brand,
        borderColor: theme.colors.border.brand,
      },
      style,
    ]}
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
