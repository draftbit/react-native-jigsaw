import { Platform } from "react-native";
import type {
  MapViewProps,
  MapCalloutProps,
  MapMarkerProps,
} from "react-native-maps";

let MapView: React.ElementType<MapViewProps>;
let Callout: React.ElementType<MapCalloutProps>;
let Marker: React.ElementType<MapMarkerProps>;

// Importing react-native-maps when using @draftbit/ui on Web Snack causes errors
// .web and .native files are not sufficient for this problem
if (Platform.OS !== "web") {
  MapView = require("react-native-maps").default;
  Callout = require("react-native-maps").Callout;
  Marker = require("react-native-maps").Marker;
} else {
  MapView = require("@teovilla/react-native-web-maps").default;
  Callout = require("@teovilla/react-native-web-maps").Callout;
  Marker = require("@teovilla/react-native-web-maps").Marker;
}

export default MapView;
export { Callout, Marker };
