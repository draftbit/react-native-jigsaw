import React from "react";
import {
  MapView,
  MapMarker,
  MapCallout,
  MapMarkerCluster,
  MapMarkerView,
} from "@draftbit/maps";
import { ButtonSolid, withTheme } from "@draftbit/ui";
import { StyleSheet, Text, View } from "react-native";
import { MapMarkerClusterView } from "@draftbit/maps";

const MapViewExample = ({ theme }) => {
  const mapRef = React.createRef();

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        apiKey="AIzaSyBSM2NJ9iJkilKzWcZcCHklTSfZNewGIl4"
        showsCompass={true}
        style={styles.map}
        latitude={43.741895}
        autoClusterMarkers
        longitude={-73.989308}
        zoom={16}
      >
        <MapMarker
          latitude={40.741895}
          longitude={-73.989308}
          pinColor={theme.colors.branding.primary}
          title="Draftbit"
          description="A simple MapView example"
        />
        <MapMarker
          latitude={40.741895}
          longitude={-73.979308}
          pinColor={theme.colors.branding.secondary}
        >
          <MapCallout showTooltip>
            <Text>With Callout</Text>
          </MapCallout>
        </MapMarker>

        <MapMarker
          latitude={43.741895}
          longitude={-73.989308}
          pinColor={theme.colors.branding.primary}
          title="Draftbit"
          description="A simple MapView example"
        />
        <MapMarker
          latitude={43.741895}
          longitude={-73.979308}
          pinColor={theme.colors.branding.secondary}
        >
          <MapCallout showTooltip>
            <Text>With Callout</Text>
          </MapCallout>
        </MapMarker>
      </MapView>
      <ButtonSolid
        title="Zoom to Chicago"
        onPress={() => {
          mapRef.current.animateToLocation({
            latitude: 41.8781,
            longitude: -87.6298,
            zoom: 10,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "90%",
  },
});

export default withTheme(MapViewExample);
