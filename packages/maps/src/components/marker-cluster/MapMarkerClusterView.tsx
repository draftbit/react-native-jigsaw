import React from "react";
import { ViewStyle, StyleProp, Text, View } from "react-native";
import { MapMarkerClusterContext } from "./MapMarkerClusterContext";
import { withTheme } from "@draftbit/theme";
import type { ReadTheme } from "@draftbit/theme";

interface MapMarkerClusterViewProps {
  zoomOnPress?: boolean;
  onPress?: (latitude: number, longitude: number) => void;
  renderItem?: ({ markerCount }: { markerCount: number }) => JSX.Element;
  tracksViewChanges?: boolean;
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
  ({ theme }: { theme: ReadTheme }) => {
    return (
      <MapMarkerClusterView
        renderItem={({ markerCount }) => (
          <View
            testID="default-map-marker-cluster-view"
            style={{
              backgroundColor: theme.colors.branding.primary,
              borderColor: theme.colors.background.brand,
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
                color: theme.colors.background.brand,
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
