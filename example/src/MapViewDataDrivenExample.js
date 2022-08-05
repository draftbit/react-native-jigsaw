import React from "react";
import { MapView, MapMarker, MapCallout } from "@draftbit/maps";
import { withTheme } from "@draftbit/ui";
import { StyleSheet, Text, View } from "react-native";

const MapViewDataDrivenExample = ({ theme }) => {
  const mapRef = React.createRef();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://example-data.draftbit.com/properties?_limit=10")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  if (!data) {
    return <Text>"Loading..."</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        showsCompass={true}
        style={styles.map}
        latitude={33.8303}
        longitude={-116.524}
        zoom={12}
        apiKey={"AIzaSyC53v7BvSuA1yv7Hwf1rC_9kpHMmmYJJhU"}
        markersData={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MapMarker
            latitude={item.latitude}
            longitude={item.longitude}
            pinColor={theme.colors.secondary}
          >
            <MapCallout showTooltip>
              <Text>With Callout</Text>
            </MapCallout>
          </MapMarker>
        )}
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

export default withTheme(MapViewDataDrivenExample);
