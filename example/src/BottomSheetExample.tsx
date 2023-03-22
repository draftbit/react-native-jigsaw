import React from "react";
import { Text, View } from "react-native";
import { BottomSheet } from "@draftbit/ui";

const BottomSheetExample: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomSheet style={{ alignItems: "center" }}>
        <Text>This is a bottom Sheet</Text>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetExample;
