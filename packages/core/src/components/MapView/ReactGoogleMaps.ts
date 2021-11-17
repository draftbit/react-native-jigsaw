import { Platform } from "react-native";

let GoogleMap, InfoWindow, Marker, LoadScript;

// Importing @react-google-maps/api when using @draftbit/ui on Native Snack causes errors
if (Platform.OS === "web") {
  GoogleMap = require("@react-google-maps/api").GoogleMap;
  InfoWindow = require("@react-google-maps/api").InfoWindow;
  Marker = require("@react-google-maps/api").Marker;
  LoadScript = require("@react-google-maps/api").LoadScript;
}

export { GoogleMap, InfoWindow, Marker, LoadScript };
