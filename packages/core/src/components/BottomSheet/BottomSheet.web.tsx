import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

import { extractStyles } from "../../utilities";
import { BottomSheetProps } from "./types";

const windowHeight = Dimensions.get("window").height;

const BottomSheetComponent: React.FC<BottomSheetProps> = ({
  style,
  children,
  step,
}) => {
  const { viewStyles } = extractStyles(style);
  const bottomSheetRef = React.useRef<any>();

  const webStep = React.useMemo(() => step + 1, [step]);
  const snapPoints = React.useMemo(() => [128, "50%", windowHeight - 300], []);

  React.useEffect(() => {
    bottomSheetRef?.current?.snapTo(snapPoints.length - webStep);
    // bottomSheetRef.current.snapTo(step);
  }, [webStep, step, snapPoints]);

  if (step === -1) {
    return <></>;
  }

  return (
    <ScrollBottomSheet
      ref={bottomSheetRef}
      componentType="ScrollView"
      snapPoints={snapPoints}
      initialSnapIndex={0}
      renderHandle={() => (
        <View style={styles.header}>
          <View style={styles.panelHandle} />
        </View>
      )}
    >
      <View
        style={{
          ...styles.container,
          ...viewStyles,
          backgroundColor: webStep !== -1 ? "grey" : "transparent",
        }}
      >
        {children}
      </View>
    </ScrollBottomSheet>
  );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: "#F3F4F9",
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 4,
  },
  item: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 10,
  },
});
