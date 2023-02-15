import React, { useState } from "react";
import { Text, View } from "react-native";
import { BottomSheet, Button } from "@draftbit/ui";

const BottomSheetExample: React.FC = () => {
  const [visble, setIsVisible] = useState(true);
  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <Button title="Toggle visibility" onPress={() => setIsVisible(!visble)} />

      <BottomSheet visible={visble} style={{ alignItems: "center" }}>
        <Text>This is a bottom Sheet</Text>
      </BottomSheet>
    </View>
  );
};

export default BottomSheetExample;
