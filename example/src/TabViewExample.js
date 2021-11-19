import * as React from "react";
import { View, Text } from "react-native";
import { TabView, TabViewItem } from "@draftbit/ui";
import Section, { Container } from "./Section";

function TabViewExample({ theme }) {
  return (
    <TabView>
      <TabViewItem id="tab-1" title="Tab 1">
        <View>
          <Text>TabView1</Text>
        </View>
      </TabViewItem>
      <TabViewItem id="tab-2" title="Tab 2">
        <View>
          <Text>TabView2</Text>
        </View>
      </TabViewItem>
    </TabView>
  );
}

export default TabViewExample;
