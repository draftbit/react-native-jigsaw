import { Platform } from "react-native";
import {
  MapCallout as WebMapCallout,
  MapMarker as WebMapMarker,
  MapView as WebMapView,
} from "@draftbit/web-maps";
import {
  MapCallout as NativeMapCallout,
  MapMarker as NativeMapMarker,
  MapView as NativeMapView,
} from "./components";

const MapCallout = Platform.OS === "web" ? WebMapCallout : NativeMapCallout;
const MapMarker = Platform.OS === "web" ? WebMapMarker : NativeMapMarker;
const MapView = Platform.OS === "web" ? WebMapView : NativeMapView;

export { MapCallout, MapMarker, MapView };
