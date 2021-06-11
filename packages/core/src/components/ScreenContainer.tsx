import * as React from "react";
import {
  StyleSheet,
  ScrollView as NativeScrollView,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Edge } from "react-native-safe-area-context";
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
  hasSafeArea = false,
  scrollable = false,
  hasBottomSafeArea,
  hasTopSafeArea,
  theme,
  style,
  children,
  ...rest
}: Props) {
  const backgroundColor = theme.colors.background;

  const edges: Edge[] = ["left", "right"];
  if (hasSafeArea || hasTopSafeArea) {
    edges.push("top");
  }

  if (hasSafeArea || hasBottomSafeArea) {
    edges.push("bottom");
  }

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      {...rest}
    >
      <View style={[styles.container, { backgroundColor }, style]}>
        {scrollable ? (
          <ScrollView style={style}>{children}</ScrollView>
        ) : (
          children
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme(ScreenContainer);
