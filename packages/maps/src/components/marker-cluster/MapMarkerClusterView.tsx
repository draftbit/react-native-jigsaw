import React from "react";
import { ViewStyle, StyleProp, Text, View } from "react-native";
import { MapMarkerClusterContext } from "./MapMarkerClusterContext";
import { withTheme, DefaultTheme } from "@draftbit/ui";

interface MapMarkerClusterViewProps {
  zoomOnPress?: boolean;
  onPress?: (latitude: number, longitude: number) => void;
  renderItem?: ({ markerCount }: { markerCount: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
}

/**
 * Overrides the default cluster component that is rendered when a group of markers are clustered together
 *
 * Placed inside a MapMarkerCluster when manually creating clusters
 * OR inside a MapView when relying on automatic clustering based on distance
 */
const MapMarkerClusterView: React.FC<MapMarkerClusterViewProps> = ({
  renderItem,
  style,
}) => {
  const { markerCount } = React.useContext(MapMarkerClusterContext);

  return (
    <View style={style}>{renderItem?.({ markerCount: markerCount || 0 })}</View>
  );
};

export const DefaultMapMarkerClusterView = withTheme(
  ({ theme }: { theme: typeof DefaultTheme }) => {
    return (
      <MapMarkerClusterView
        renderItem={({ markerCount }) => (
          <View
            testID="default-map-marker-cluster-view"
            style={{
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.background,
              borderWidth: 1,
              borderRadius: 15,
              paddingHorizontal: 3,
              minWidth: 30,
              minHeight: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: theme.colors.background,
                textAlign: "center",
              }}
            >
              {markerCount}
            </Text>
          </View>
        )}
      />
    );
  }
);

export default MapMarkerClusterView;
