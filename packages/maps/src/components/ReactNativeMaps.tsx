import { Platform } from "react-native";

let MapView: React.ElementType | undefined,
  Callout: React.ElementType | undefined,
  Marker: React.ElementType | undefined;

// Importing react-native-maps when using @draftbit/ui on Web Snack causes errors
// .web and .native files are not sufficient for this problem
if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
  Callout = require("react-native-maps").Callout;
  Marker = require("react-native-maps").Marker;
}

export default MapView;
export { Callout, Marker };
