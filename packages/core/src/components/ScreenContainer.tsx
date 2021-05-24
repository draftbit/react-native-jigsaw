import * as React from "react";
import {
  StyleSheet,
  ScrollView as NativeScrollView,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";

function ScrollView({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <NativeScrollView
      contentContainerStyle={[
        {
          flexGrow: 1,
        },
        style,
      ]}
    >
      {children}
    </NativeScrollView>
  );
}

type Props = {
  hasSafeArea: boolean;
  scrollable: boolean;
  hasBottomSafeArea?: boolean;
  hasTopSafeArea?: boolean;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

function ScreenContainer({
  hasSafeArea = true,
  scrollable = true,
  hasBottomSafeArea,
  hasTopSafeArea,
  theme,
  style,
  children,
  ...rest
}: Props) {
  const insets = useSafeAreaInsets();
  const paddingTop = hasSafeArea || hasTopSafeArea ? insets.top : 0;
  const paddingBottom = hasSafeArea || hasBottomSafeArea ? insets.bottom : 0;
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
      {scrollable ? (
        <ScrollView style={style}>{children}</ScrollView>
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(ScreenContainer);
