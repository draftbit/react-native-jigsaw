import React from "react";
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
  Dimensions,
} from "react-native";

import BottomSheetComponent, {
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useTheme } from "@draftbit/theme";
import { extractPercentNumber, useDeepCompareMemo } from "../../utilities";

type SnapPosition = "top" | "middle" | "bottom";

const windowHeight = Dimensions.get("window").height;

export interface BottomSheetProps extends ScrollViewProps {
  topSnapPosition?: string | number;
  middleSnapPosition?: string | number;
  bottomSnapPosition?: string | number;
  /**
   * As distance from top (number or percentage string), sorted from top to bottom
   */
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
  enableDynamicSizing?: boolean;
  onSettle?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
}

// Clarification:
// Input of snap points is sorted top -> bottom where each value represents distance from top
// Implementation using `@gorhom/bottom-sheet` is sorted bottom -> top where each value represents distance from bottom
const BottomSheet = React.forwardRef<BottomSheetComponent, BottomSheetProps>(
  (
    {
      snapPoints: snapPointsProp,
      topSnapPosition = "10%",
      middleSnapPosition = "50%",
      bottomSnapPosition = "80%",
      initialSnapIndex,
      initialSnapPosition = "bottom",
      showHandle = true,
      handleColor,
      topBorderRadius = 20,
      borderWidth = 1,
      borderColor,
      enableDynamicSizing = true,
      onSettle,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const backgroundColor =
      (style as ViewStyle)?.backgroundColor || theme.colors.background.brand;

    const snapPoints = snapPointsProp ?? [
      topSnapPosition,
      middleSnapPosition,
      bottomSnapPosition,
    ];

    const mappedSnapPoints = useDeepCompareMemo(
      () => convertSnapPointsForNewImplementation(snapPoints),
      snapPoints
    );

    const getSnapIndexFromPosition = (position: SnapPosition) => {
      switch (position) {
        case "bottom":
          return 0;
        case "middle":
          return 1;
        case "top":
          return 2;
      }
    };

    return (
      <BottomSheetComponent
        ref={ref}
        enableDynamicSizing={enableDynamicSizing}
        snapPoints={mappedSnapPoints}
        index={
          initialSnapIndex !== undefined
            ? mappedSnapPoints.length - initialSnapIndex - 1
            : getSnapIndexFromPosition(initialSnapPosition)
        }
        handleIndicatorStyle={[
          { backgroundColor: handleColor ?? theme.colors.border.brand },
          !showHandle ? { display: "none" } : {},
        ]}
        backgroundStyle={{
          backgroundColor,
          borderTopLeftRadius: topBorderRadius,
          borderTopRightRadius: topBorderRadius,
          borderWidth,
          borderColor: borderColor ?? theme.colors.border.brand,
        }}
        onChange={(index) =>
          // Convert bottom-sheet index to match our top-to-bottom ordering
          // When dynamic sizing is enabled, we don't need to subtract 1 since an extra snap point may be added
          enableDynamicSizing
            ? onSettle?.(mappedSnapPoints.length - index)
            : onSettle?.(mappedSnapPoints.length - index - 1)
        }
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

// @gorhom/bottom-sheet has a different format for snap points and requires some manipulation
function convertSnapPointsForNewImplementation(
  snapPoints: (string | number)[]
) {
  // Older implementation required snap points sorted top -> bottom, new library requires bottom -> top
  const reversedSnapPoints = [...snapPoints].reverse();

  // Older implementation required snap points as distance from top, new library requires them as distance from bottom
  return reversedSnapPoints.map((point) => {
    if (typeof point === "string") {
      const percentNumber = extractPercentNumber(point);
      if (percentNumber !== undefined) {
        return `${100 - percentNumber}%`;
      }
      return point;
    } else if (typeof point === "number") {
      return windowHeight - point;
    } else {
      return point;
    }
  });
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default BottomSheet;
