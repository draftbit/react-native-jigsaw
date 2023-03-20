import React from "react";
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  ScrollViewProps,
} from "react-native";

import BottomSheetComponent from "./BottomSheetComponent";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";

type SnapPosition = "top" | "middle" | "bottom";
export interface BottomSheetProps extends ScrollViewProps {
  topSnapPosition?: string | number;
  middleSnapPosition?: string | number;
  bottomSnapPosition?: string | number;
  snapPoints: (string | number)[];
  initialSnapIndex?: number;
  initialSnapPosition: SnapPosition;
  showHandle?: boolean;
  handleColor?: string;
  topBorderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  onSettle?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
}

const BottomSheet: React.FC<React.PropsWithChildren<BottomSheetProps>> = ({
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
}) => {
  const backgroundColor =
    (style as ViewStyle)?.backgroundColor || theme.colors.background;

  const snapPoints = snapPointsProp || [
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
    <View style={styles.parentContainer} pointerEvents="box-none">
      <BottomSheetComponent
        componentType="ScrollView"
        snapPoints={snapPoints}
        initialSnapIndex={
          initialSnapIndex ?? getSnapIndexFromPosition(initialSnapPosition)
        }
        renderHandle={() => (
          <>
            {showHandle && (
              <View
                style={[
                  styles.handleContainer,
                  {
                    backgroundColor,
                    borderTopLeftRadius: topBorderRadius,
                    borderTopRightRadius: topBorderRadius,
                  },
                ]}
              >
                <View
                  style={[styles.handle, { backgroundColor: handleColor }]}
                />
              </View>
            )}
          </>
        )}
        contentContainerStyle={[styles.contentContainerStyle, style]}
        containerStyle={StyleSheet.flatten([
          styles.containerStyle,
          {
            backgroundColor,
            borderTopLeftRadius: topBorderRadius,
            borderTopRightRadius: topBorderRadius,
            borderWidth,
            borderColor,
          },
        ])}
        onSettle={onSettle}
        {...rest}
      >
        {children}
      </BottomSheetComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  //Render on top of everything
  parentContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 10,
    overflow: "hidden",
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  containerStyle: {
    flex: 1,
    overflow: "hidden",
  },
  handleContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  handle: {
    width: 40,
    height: 2,
    borderRadius: 4,
  },
});

export default withTheme(BottomSheet);
