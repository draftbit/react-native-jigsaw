import * as React from "react";
import { Text } from "react-native";
import { TabView, TabViewItem } from "@draftbit/ui";

const TabViewExample: React.FC = () => {
  return (
    <TabView>
      <TabViewItem
        style={{ justifyContent: "center", alignItems: "center" }}
        title="Tab 1"
      >
        <Text>TabView1</Text>
      </TabViewItem>
      <TabViewItem
        style={{ justifyContent: "center", alignItems: "center" }}
        title="Tab 2"
      >
        <Text>TabView2</Text>
      </TabViewItem>
    </TabView>
  );
};

export default TabViewExample;
