import { Platform } from "react-native";

let GoogleMap: React.ElementType | undefined,
  InfoWindow: React.ElementType | undefined,
  Marker: React.ElementType | undefined,
  useJsApiLoader: any;

// Importing @react-google-maps/api when using @draftbit/ui on Native Snack causes errors
// .web and .native files are not sufficient for this problem
if (Platform.OS === "web") {
  GoogleMap = require("@react-google-maps/api").GoogleMap;
  InfoWindow = require("@react-google-maps/api").InfoWindow;
  Marker = require("@react-google-maps/api").Marker;
  useJsApiLoader = require("@react-google-maps/api").useJsApiLoader;
}

export { GoogleMap, InfoWindow, Marker, useJsApiLoader };
