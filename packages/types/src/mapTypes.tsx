import { StyleProp, ViewStyle, ImageSourcePropType } from "react-native";

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
  pinImage?: string | ImageSourcePropType;
  pinImageSize?: number;
  onPress?: () => void;
  flat?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface MapViewProps<TMarkerData> {
  apiKey: string;
  provider?: "google" | null;
  latitudeDelta?: number;
  longitudeDelta?: number;
  zoom?: number;
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
  showsUserLocation?: boolean;
  followsUserLocation?: boolean;
  showsPointsOfInterest?: boolean;
  style?: StyleProp<ViewStyle>;
  markersData?: Array<TMarkerData>;
  keyExtractor: (item: TMarkerData, index: number) => string;
  renderItem?: ({
    item,
    index,
  }: {
    item: TMarkerData;
    index: number;
  }) => JSX.Element;
  onRegionChange?: (latitude: number, longitude: number) => void;
}

export interface MapCalloutProps {
  title?: string;
  description?: string;
  anchor: any;
  onPress?: (event: any) => void;
  showTooltip?: boolean;
}
