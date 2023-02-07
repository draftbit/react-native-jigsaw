import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";

export interface DeckSwiperCardProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  theme: Theme;
}

const DeckSwiperCard: React.FC<DeckSwiperCardProps> = ({
  style,
  children,
  theme,
}) => (
  <View
    style={[
      styles.card,
      {
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.global,
        borderColor: theme.colors.divider,
      },
      style,
    ]}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 2,
  },
});

export default withTheme(DeckSwiperCard);
