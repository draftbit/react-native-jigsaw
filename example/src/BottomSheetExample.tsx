import React from "react";
import { Text, View } from "react-native";
import { BottomSheet } from "@draftbit/ui";
import { Button } from "@draftbit/core";

const BottomSheetExample: React.FC = () => {
  const bottomSheetRef = React.useRef<any>();
  const [snapIndex, setSnapIndex] = React.useState(0);
  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        enableDynamicSizing={false}
        style={{ alignItems: "center" }}
        ref={bottomSheetRef}
        onSettle={(newIndex: number) => {
          try {
            console.log("onSettle", newIndex);
            setSnapIndex(newIndex);
          } catch (error) {
            console.error("Error in onSettle:", error);
          }
        }}
      >
        <Text>This is a bottom Sheet</Text>
      </BottomSheet>
      <Button
        title="Expand"
        onPress={() => {
          if (bottomSheetRef && bottomSheetRef?.current) {
            bottomSheetRef?.current?.expand();
          }
        }}
      />
      <Button
        title="Snap to index 1"
        onPress={() => {
          if (bottomSheetRef && bottomSheetRef?.current) {
            bottomSheetRef?.current?.snapToIndex(1);
          }
        }}
      />
      <Button
        title="Collapse"
        onPress={() => {
          if (bottomSheetRef && bottomSheetRef?.current) {
            bottomSheetRef?.current?.collapse();
          }
        }}
      />
      <Button
        title="Close"
        onPress={() => {
          if (bottomSheetRef && bottomSheetRef?.current) {
            bottomSheetRef?.current?.close();
          }
        }}
      />
      <Text>Snap index: {snapIndex}</Text>
    </View>
  );
};

export default BottomSheetExample;
