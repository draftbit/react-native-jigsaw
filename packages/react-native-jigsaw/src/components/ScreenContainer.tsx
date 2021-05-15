import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { withTheme } from "../core/theming";
import type { Theme } from "../styles/DefaultTheme";

function SV({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <ScrollView
      contentContainerStyle={[
        {
          flexGrow: 1,
        },
        style,
      ]}
    >
      {children}
    </ScrollView>
  );
}

type Props = {
  hasSafeArea: boolean;
  scrollable: boolean;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

function ScreenContainer({
  hasSafeArea = true,
  scrollable = true,
  theme,
  style,
  children,
  ...rest
}: Props) {
  const insets = useSafeAreaInsets();
  const paddingTop = hasSafeArea ? insets.top : 0;
  const paddingBottom = hasSafeArea ? insets.bottom : 0;
  const backgroundColor = theme.colors.background;

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop,
          paddingBottom,
          backgroundColor,
        },
        style,
      ]}
      {...rest}
    >
      {scrollable ? <SV style={style}>{children}</SV> : children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(ScreenContainer);
