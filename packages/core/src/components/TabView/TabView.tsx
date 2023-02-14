import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import {
  TabView,
  TabBar,
  SceneMap,
  SceneRendererProps,
  NavigationState,
  Route,
} from "react-native-tab-view";

import TabViewItem from "./TabViewItem";
import type { IconSlot } from "../../interfaces/Icon";
import { withTheme } from "../../theming";
import type { Theme } from "../../styles/DefaultTheme";

type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<any>;
};
type TabBarPosition = "top" | "bottom";
type KeyboardDismissMode = "none" | "auto" | "on-drag";

type TabViewProps = {
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
  tabBarPosition?: TabBarPosition;
  keyboardDismissMode?: KeyboardDismissMode;
  swipeEnabled?: boolean;
  scrollEnabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  pressColor?: string;
  indicatorColor?: string;
  tabsBackgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  theme: Theme;
} & IconSlot;

const TabViewComponent: React.FC<React.PropsWithChildren<TabViewProps>> = ({
  Icon,
  onIndexChanged,
  onEndReached,
  tabBarPosition,
  keyboardDismissMode,
  swipeEnabled,
  scrollEnabled,
  activeColor,
  inactiveColor,
  pressColor,
  indicatorColor,
  tabsBackgroundColor,
  style,
  theme,
  children,
}) => {
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState<Route[]>([]);
  const [tabScenes, setTabScenes] = React.useState({});

  //Populate routes and scenes based on children
  React.useEffect(() => {
    const newRoutes: Route[] = [];
    const scenes: any = {};

    React.Children.toArray(children)
      .filter(
        (child) => React.isValidElement(child) && child.type === TabViewItem
      )
      .forEach((item: any, idx) => {
        const child = item as React.ReactElement;
        newRoutes.push({
          key: idx.toString(),
          title: child.props.title,
          icon: child.props.icon,
          accessibilityLabel: child.props.accessibilityLabel,
        });
        scenes[idx] = () => child;
      });

    setRoutes(newRoutes);
    setTabScenes(scenes);
  }, [children]);

  const indexChangeHandler = (i: number) => {
    setIndex(i);
    onIndexChanged?.(i);
    if (i === routes.length) {
      onEndReached?.();
    }
  };

  const renderTabBar: React.FC<TabBarProps> = (props) => {
    return (
      <TabBar
        {...props}
        activeColor={activeColor || theme.colors.primary}
        inactiveColor={inactiveColor || theme.colors.divider}
        pressColor={pressColor || theme.colors.primary}
        scrollEnabled={scrollEnabled}
        indicatorStyle={{
          backgroundColor: indicatorColor || theme.colors.primary,
        }}
        renderIcon={({ route, color }) =>
          route?.icon ? (
            <Icon name={route.icon} color={color} size={36} />
          ) : null
        }
        style={[
          { backgroundColor: tabsBackgroundColor || theme.colors.background },
          style,
        ]}
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

export default withTheme(TabViewComponent);
