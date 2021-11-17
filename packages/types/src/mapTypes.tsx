import { StyleProp, ViewStyle } from "react-native";

type MapTypes =
  | "standard"
  | "satellite"
  | "hybrid"
  | "terrain"
  | "none"
  | "mutedStandard";

export interface MapMarkerProps {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  pinColor?: string;
  flat?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface MapViewProps {
  apiKey: string;
  provider?: "google" | null;
  latitudeDelta?: number;
  longitudeDelta?: number;
  latitude?: number;
  longitude?: number;
  mapType?: MapTypes;
  zoomEnabled?: boolean;
  showsCompass?: boolean;
  rotateEnabled?: boolean;
  scrollEnabled?: boolean;
  loadingEnabled?: boolean;
  loadingBackgroundColor?: string;
  loadingIndicatorColor?: string;
  style?: StyleProp<ViewStyle>;
}

export interface MapCalloutProps {
  title?: string;
  description?: string;
  anchor: any;
  onPress?: (event: any) => void;
  showTooltip?: boolean;
}
