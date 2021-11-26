import * as React from "react";
import { View, Text } from "react-native";
import { TabView, TabViewItem } from "@draftbit/ui";

function TabViewExample({ theme }) {
  return (
    <TabView
      style={{ backgroundColor: "white" }}
      activeColor="red"
      inactiveColor="grey"
      pressColor="green"
      indicatorColor="red"
    >
      <TabViewItem id="tab1" title="Tab 1">
        <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
          <Text
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            TabView1
          </Text>
        </View>
      </TabViewItem>
      <TabViewItem id="tab2" title="Tab 2">
        <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
          <Text
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            TabView2
          </Text>
        </View>
      </TabViewItem>
    </TabView>
  );
}

export default TabViewExample;
