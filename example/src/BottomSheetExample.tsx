import React from "react";
import { Text, View } from "react-native";
import { BottomSheet } from "@draftbit/ui";
import { Button } from "@draftbit/core";

const BottomSheetExample: React.FC = () => {
  const bottomSheetRef = React.useRef<any>();
  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        style={{ alignItems: "center" }}
        ref={bottomSheetRef}
        onSettle={(newIndex: number) => {
          try {
            console.log("onSettle", newIndex);
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
    </View>
  );
};

export default BottomSheetExample;
