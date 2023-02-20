import React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

//Props used by parent (TabView) to create tabs
export interface TabViewItemProps {
  title: string;
  icon?: string;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

const TabViewItem: React.FC<React.PropsWithChildren<TabViewItemProps>> = ({
  style,
  children,
}) => {
  return <View style={[styles.parentContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
});

export default TabViewItem;
