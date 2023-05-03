import { Platform } from "react-native";
import * as MapViewRMaps from "react-native-maps";
import type {
  MapViewProps,
  MapCalloutProps,
  MapMarkerProps,
} from "react-native-maps";

console.log(MapViewRMaps);

let MapView: React.ElementType<MapViewProps>;
let Callout: React.ElementType<MapCalloutProps>;
let Marker: React.ElementType<MapMarkerProps>;

/*
Importing react-native-maps Web Snack causes errors
.web and .native files are not sufficient for this problem

On Snack, react-native's UIManager is undefined, and is used in this file in 'react-native-maps'
https://github.com/react-native-maps/react-native-maps/blob/master/src/decorateMapComponent.ts
Causing 'UIManager.getViewManagerConfig is not a function' error

Not importing in 'react-native-maps' anywhere while on web prevents this file from running, and stops the issue.
Possibly fixed when this issue is fixed: https://github.com/react-native-maps/react-native-maps/issues/4383
*/
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
