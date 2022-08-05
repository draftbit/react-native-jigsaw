import React from "react";
import { MapView, MapMarker, MapCallout } from "@draftbit/maps";
import { ButtonSolid, withTheme } from "@draftbit/ui";
import { StyleSheet, Text, View } from "react-native";

const MapViewExample = ({ theme }) => {
  const mapRef = React.createRef();

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
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
