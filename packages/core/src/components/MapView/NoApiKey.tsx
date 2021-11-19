import * as React from "react";
import { Text, View } from "react-native";

const NoApiKey = () => (
  <View>
    <Text style={{ textAlign: "center" }}>
      To use maps on the Web, you need to provide a Google Maps API key, which
      can be obtained at
      https://developers.google.com/maps/documentation/javascript/get-api-key.
    </Text>
  </View>
);

export default NoApiKey;
