import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, DefaultTheme } from "@draftbit/ui";

export default class App extends React.Component {
  render() {
    return (
      <Provider theme={DefaultTheme}>
        <View style={styles.container}>
          <Text>Replace me with a component</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
