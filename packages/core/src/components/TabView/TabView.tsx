import * as React from "react";
import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Constants from "expo-constants";

import TabViewItem from "./TabViewItem";

interface TabViewProps {
  children: React.ReactNode;
}

export default ({ children }: TabViewProps) => {
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([]);
  const [tabScenes, setTabScenes] = React.useState({});

  React.useEffect(() => {
    const newRoutes: any = [];
    const scenes: any = {};

    React.Children.toArray(children)
      .filter((child: any) => child.type === TabViewItem)
      .forEach((child: any) => {
        if (child?.props?.id) {
          newRoutes.push({
            key: child?.props?.id,
            title: child?.props?.title,
          });
          scenes[child?.props?.id] = () => child;
        }
      });

    setRoutes(newRoutes);
    setTabScenes(scenes);
  }, [children]);

  const _handleIndexChange = (i: any) => setIndex(i);

  const _renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (__: any, i: number) => i
    );

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route: any, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(tabScenes)}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
