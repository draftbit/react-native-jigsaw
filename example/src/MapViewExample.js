import React from "react";
import { MapView, MapMarker, MapCallout } from "@draftbit/maps";
import { withTheme } from "@draftbit/ui";
import { StyleSheet, Text, View } from "react-native";

const MapViewExample = ({ theme }) => (
  <View style={styles.container}>
    <MapView
      showsCompass={true}
      style={styles.map}
      latitude={40.741895}
      longitude={-73.989308}
      zoom={16}
    >
      <MapMarker
        latitude={40.741895}
        longitude={-73.989308}
        pinColor={theme.colors.primary}
        title="Draftbit"
        description="A simple MapView example"
      />
      <MapMarker
        latitude={40.741895}
        longitude={-73.979308}
        pinColor={theme.colors.secondary}
      >
        <MapCallout showTooltip>
          <Text>With Callout</Text>
        </MapCallout>
      </MapMarker>
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default withTheme(MapViewExample);
