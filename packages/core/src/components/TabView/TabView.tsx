import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

// import { withTheme } from "../../theming";
import TabViewItem from "./TabViewItem";
import type { IconSlot } from "../../interfaces/Icon";

type TabBarPosition = "top" | "bottom";
type KeyboardDismissMode = "none" | "auto" | "on-drag";

type TabViewProps = {
  tabBarPosition?: TabBarPosition;
  keyboardDismissMode?: KeyboardDismissMode;
  swipeEnabled?: boolean;
  scrollEnabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  pressColor?: string;
  indicatorColor?: string;
  style?: StyleProp<TextStyle | ViewStyle>;
  children: React.ReactNode;
} & IconSlot;

const TabViewComponent = ({
  Icon,
  tabBarPosition,
  keyboardDismissMode,
  swipeEnabled,
  scrollEnabled,
  activeColor,
  inactiveColor,
  pressColor,
  indicatorColor,
  style,
  children,
}: TabViewProps) => {
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
            ...child?.props,
          });
          scenes[child?.props?.id] = () => child;
        }
      });

    setRoutes(newRoutes);
    setTabScenes(scenes);
  }, [children]);

  const indexChangeHandler = (i: any) => setIndex(i);

  const renderTabBar = (props: any) => {
    console.log(props);
    return (
      <TabBar
        {...props}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        pressColor={pressColor}
        scrollEnabled={scrollEnabled}
        indicatorStyle={{ backgroundColor: indicatorColor }}
        renderIcon={({ route, color }) =>
          route?.icon ? (
            <Icon name={route.icon} color={color} size={36} />
          ) : null
        }
        style={style}
      />
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(tabScenes)}
      renderTabBar={renderTabBar}
      onIndexChange={indexChangeHandler}
      tabBarPosition={tabBarPosition}
      keyboardDismissMode={keyboardDismissMode}
      swipeEnabled={swipeEnabled}
    />
  );
};

export default TabViewComponent;
