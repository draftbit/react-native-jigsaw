import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Edge } from "react-native-safe-area-context";
import { withTheme } from "../theming";
import type { Theme } from "../styles/DefaultTheme";

type ScreenContainerProps = {
  scrollable?: boolean;
  hasSafeArea?: boolean;
  hasTopSafeArea?: boolean;
  hasBottomSafeArea?: boolean;
  hasLeftSafeArea?: boolean;
  hasRightSafeArea?: boolean;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

function ScreenContainer({
  scrollable = false,
  hasSafeArea = false,
  hasBottomSafeArea = false,
  hasTopSafeArea = false,
  hasLeftSafeArea = true,
  hasRightSafeArea = true,
  theme,
  style,
  children,
  ...rest
}: ScreenContainerProps) {
  const backgroundColor =
    StyleSheet.flatten(style)?.backgroundColor || theme.colors.background;

  const edges: Edge[] = [];
  if (hasSafeArea || hasTopSafeArea) {
    edges.push("top");
  }

  if (hasSafeArea || hasBottomSafeArea) {
    edges.push("bottom");
  }

  if (hasSafeArea || hasLeftSafeArea) {
    edges.push("left");
  }

  if (hasSafeArea || hasRightSafeArea) {
    edges.push("right");
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
      {scrollable ? (
        <ScrollView
          contentContainerStyle={[
            styles.scrollViewContainer,
            { backgroundColor },
            style,
          ]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, { backgroundColor }, style]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    flex: undefined,
  },
});

export default withTheme(ScreenContainer);
