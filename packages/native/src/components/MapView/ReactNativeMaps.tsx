import { Platform } from "react-native";

let MapView, Callout, Marker;

// Importing react-native-maps when using @draftbit/ui on Web Snack causes errors
if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
  Callout = require("react-native-maps").Callout;
  Marker = require("react-native-maps").Marker;
}

export default MapView;
export { Callout, Marker };
