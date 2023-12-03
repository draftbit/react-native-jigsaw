import React from "react";
import { View } from "react-native";
import { KeyboardAvoidingView, TextField } from "@draftbit/ui";

const KeyboardAvoidingViewExample: React.FC = () => {
  const [value, setValue] = React.useState("");
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <KeyboardAvoidingView behavior="height">
        <TextField
          value={value}
          onChangeText={(text) => setValue(text.toString())}
          numberOfLines={1}
          type="solid"
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default KeyboardAvoidingViewExample;
