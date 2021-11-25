import * as React from "react";
import { View, Text } from "react-native";
import { TabView, TabViewItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

function TabViewExample({ theme }) {
  return (
    <TabView>
      <TabViewItem id="tab1" title="Tab 1">
        <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
          <Text>TabView1</Text>
        </View>
      </TabViewItem>
      <TabViewItem id="tab2" title="Tab 2">
        <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
          <Text>TabView2</Text>
        </View>
      </TabViewItem>
    </TabView>
  );
}

export default TabViewExample;
