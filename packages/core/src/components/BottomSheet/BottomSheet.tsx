import React from "react";
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from "react-native";

import BottomSheetComponent, {
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";

type SnapPosition = "top" | "middle" | "bottom";
export interface BottomSheetProps extends ScrollViewProps {
  topSnapPosition?: string | number;
  middleSnapPosition?: string | number;
  bottomSnapPosition?: string | number;
  snapPoints?: (string | number)[];
  initialSnapIndex?: number;
  initialSnapPosition?: SnapPosition;
  enableOverScroll?: boolean;
  friction?: number;
  topInset?: number;
  showHandle?: boolean;
  handleColor?: string;
  topBorderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  onSettle?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const BottomSheet = React.forwardRef<BottomSheetComponent, BottomSheetProps>(
  (
    {
      theme,
      snapPoints: snapPointsProp,
      topSnapPosition = "10%",
      middleSnapPosition = "50%",
      bottomSnapPosition = "80%",
      initialSnapIndex,
      initialSnapPosition = "bottom",
      showHandle = true,
      handleColor = theme.colors.divider,
      topBorderRadius = 20,
      borderWidth = 1,
      borderColor = theme.colors.divider,
      onSettle,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const backgroundColor =
      (style as ViewStyle)?.backgroundColor || theme.colors.background;

    const snapPoints = snapPointsProp ?? [
      topSnapPosition,
      middleSnapPosition,
      bottomSnapPosition,
    ];

    const getSnapIndexFromPosition = (position: SnapPosition) => {
      switch (position) {
        case "top":
          return 0;
        case "middle":
          return 1;
        case "bottom":
          return 2;
      }
    };

    return (
      <BottomSheetComponent
        ref={ref}
        snapPoints={snapPoints}
        index={
          initialSnapIndex ?? getSnapIndexFromPosition(initialSnapPosition)
        }
        handleIndicatorStyle={[
          { backgroundColor: handleColor },
          !showHandle ? { display: "none" } : {},
        ]}
        style={{
          backgroundColor,
          borderTopLeftRadius: topBorderRadius,
          borderTopRightRadius: topBorderRadius,
          borderWidth,
          borderColor,
        }}
        onChange={onSettle}
      >
        <BottomSheetScrollView
          contentContainerStyle={[styles.contentContainerStyle, style]}
          {...rest}
        >
          {children}
        </BottomSheetScrollView>
      </BottomSheetComponent>
    );
  }
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default withTheme(BottomSheet);
