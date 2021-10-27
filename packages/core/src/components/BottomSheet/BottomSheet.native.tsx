import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { extractStyles } from "../../utilities";
import { BottomSheetProps } from "./types";

const windowHeight = Dimensions.get("window").height;

const BottomSheetComponent: React.FC<BottomSheetProps> = ({
  style,
  children,
  step,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { viewStyles } = extractStyles(style);

  // variables
  const snapPoints = useMemo(() => [128, "50%", windowHeight - 200], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  React.useEffect(() => {
    if (step === -1) {
      bottomSheetRef?.current?.close();
    }
  }, [step]);

  return (
    <View
      style={[
        containerStyle.container,
        viewStyles,
        { backgroundColor: step !== -1 ? "grey" : "transparent" },
      ]}
    >
      <BottomSheet
        ref={bottomSheetRef}
        index={step}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView>{children}</BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetComponent;

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
