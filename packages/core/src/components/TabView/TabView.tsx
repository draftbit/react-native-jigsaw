import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import {
  TabView,
  TabBar,
  SceneMap,
  SceneRendererProps,
  NavigationState,
  Route,
} from "react-native-tab-view";

import { TabViewItemProps } from "./TabViewItem";
import type { IconSlot } from "../../interfaces/Icon";
import { withTheme } from "../../theming";
import type { Theme } from "../../styles/DefaultTheme";
import { extractStyles } from "../../utilities";

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

  const { textStyles, viewStyles } = extractStyles(style);

  //Check type of child using props
  //Regular '.type' cannot work because Draftbit strips the type in Draft view
  const instanceOfTabViewItemProps = (
    object: any
  ): object is TabViewItemProps => {
    return "title" in object;
  };

  //Populate routes and scenes based on children
  React.useEffect(() => {
    const newRoutes: Route[] = [];
    const scenes: any = {};

    React.Children.toArray(children)
      .filter(
        (child) =>
          React.isValidElement(child) && instanceOfTabViewItemProps(child.props)
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
        labelStyle={textStyles}
        renderIcon={({ route, color }) =>
          route?.icon ? (
            <Icon
              style={styles.icon}
              name={route.icon}
              color={color}
              size={16}
            />
          ) : null
        }
        style={{
          backgroundColor: tabsBackgroundColor || theme.colors.background,
        }}
        contentContainerStyle={styles.tabBarContainer}
      />
    );
  };

  //Cannot render TabView without at least one tab
  if (!routes.length) {
    return <></>;
  }

  return (
    <TabView
      style={[styles.tabView, viewStyles]}
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

const styles = StyleSheet.create({
  tabView: { flex: 1 },

  //Prevent height of bar from filling container
  tabBarContainer: { flex: undefined },
  icon: { width: 16, height: 16 },
});

export default withTheme(TabViewComponent);
