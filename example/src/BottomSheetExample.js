import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BottomSheet } from "@draftbit/ui";
import Section, { Container, styles } from "./Section";

export default function BottomSheetExample() {
  const [step, setStep] = React.useState(-1);
  return (
    <>
      <Button title="Close" onPress={() => setStep(-1)} />
      <Button title="Step 1" onPress={() => setStep(0)} />
      <Button title="Step 2" onPress={() => setStep(1)} />
      <Button title="Step 3" onPress={() => setStep(2)} />
      <BottomSheet step={step}>
        <View style={containerStyle.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </>
  );
}

const containerStyle = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
