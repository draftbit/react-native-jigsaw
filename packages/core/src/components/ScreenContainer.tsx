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

import { COMPONENT_TYPES, createStaticBoolProp } from "@draftbit/types";

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

export const SEED_DATA = {
  name: "Screen Container",
  tag: "ScreenContainer",
  description: "The top most container on your screen",
  category: COMPONENT_TYPES.layout,
  layout: { flex: 1 },
  props: {
    scrollable: createStaticBoolProp({
      label: "Scrollable?",
      description: "Makes your screen scrollable",
      defaultValue: false,
    }),
    hasSafeArea: createStaticBoolProp({
      label: "Notch padding?",
      description:
        "Puts your info below the notch. Typically only needed outside of navigation.",
      defaultValue: false,
    }),
  },
};
