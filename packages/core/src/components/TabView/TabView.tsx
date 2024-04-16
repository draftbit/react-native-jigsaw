import * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
import {
  TabView,
  TabBar,
  SceneRendererProps,
  NavigationState,
  Route,
} from "react-native-tab-view";

import TabViewItem from "./TabViewItem";
import type { IconSlot } from "../../interfaces/Icon";
import { withTheme } from "@draftbit/theme";
import type { Theme } from "@draftbit/theme";
import { flattenReactFragments, extractStyles } from "../../utilities";

type SceneProps = SceneRendererProps & {
  route: Route;
};
type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<any>;
};
type TabBarPosition = "top" | "bottom";
type KeyboardDismissMode = "none" | "auto" | "on-drag";
type IconPosition = "top" | "bottom" | "left" | "right";

type TabViewProps = {
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
  initialTabIndex?: number;
  tabBarPosition?: TabBarPosition;
  keyboardDismissMode?: KeyboardDismissMode;
  swipeEnabled?: boolean;
  scrollEnabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  pressColor?: string;
  indicatorColor?: string;
  tabsBackgroundColor?: string;
  iconSize?: number;
  iconPosition?: IconPosition;
  style?: StyleProp<ViewStyle | TextStyle>;
  theme: Theme;
} & IconSlot;

const TabViewComponent: React.FC<React.PropsWithChildren<TabViewProps>> = ({
  Icon,
  onIndexChanged,
  onEndReached,
  initialTabIndex = 0,
  tabBarPosition,
  keyboardDismissMode,
  swipeEnabled,
  scrollEnabled,
  activeColor,
  inactiveColor,
  pressColor,
  indicatorColor,
  tabsBackgroundColor,
  iconSize = 16,
  iconPosition = "top",
  style,
  theme,
  children: childrenProp,
}) => {
  const [index, setIndex] = React.useState(initialTabIndex);
  const [routes, setRoutes] = React.useState<Route[]>([]);

  const { textStyles, viewStyles } = extractStyles(style);

  const children: React.ReactNode[] = React.useMemo(
    () =>
      flattenReactFragments(
        React.Children.toArray(childrenProp) as React.ReactElement[]
      ).filter(
        (child) => React.isValidElement(child) && child.type === TabViewItem
      ),
    [childrenProp]
  );

  //Populate routes and scenes based on children
  React.useEffect(() => {
    const newRoutes: Route[] = [];

    children.forEach((item: any, idx) => {
      const child = item as React.ReactElement;
      newRoutes.push({
        key: idx.toString(),
        title: child.props.title,
        icon: child.props.icon,
        accessibilityLabel: child.props.accessibilityLabel,
      });
    });

    setRoutes(newRoutes);
  }, [children]);

  const indexChangeHandler = (i: number) => {
    setIndex(i);
    onIndexChanged?.(i);
    if (i === routes.length) {
      onEndReached?.();
    }
  };

  const renderTabBar: React.FC<TabBarProps> = (props) => {
    let tabFlexDirection: "row" | "column" | "row-reverse" | "column-reverse";
    switch (iconPosition) {
      case "top":
        tabFlexDirection = "column";
        break;
      case "bottom":
        tabFlexDirection = "column-reverse";
        break;
      case "left":
        tabFlexDirection = "row";
        break;
      case "right":
        tabFlexDirection = "row-reverse";
        break;
    }
    return (
      <TabBar
        {...props}
        activeColor={activeColor || theme.colors.primary}
        inactiveColor={inactiveColor || "rgb(200,200,200)"}
        pressColor={pressColor || theme.colors.primary}
        scrollEnabled={scrollEnabled}
        indicatorStyle={{
          backgroundColor: indicatorColor || theme.colors.primary,
        }}
        labelStyle={[{ textTransform: "none" }, textStyles]}
        tabStyle={{ flexDirection: tabFlexDirection }}
        renderIcon={({ route, color }) =>
          route?.icon ? (
            <Icon name={route.icon} color={color} size={iconSize} />
          ) : null
        }
        style={{
          backgroundColor: tabsBackgroundColor || theme.colors.background,
        }}
      />
    );
  };

  const renderScene = ({ route }: SceneProps) => {
    const index = Number(route.key);
    return children[index];
  };

  //Cannot render TabView without at least one tab
  if (!routes.length) {
    return <></>;
  }

  return (
    <TabView
      style={viewStyles}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={indexChangeHandler}
      tabBarPosition={tabBarPosition}
      keyboardDismissMode={keyboardDismissMode}
      swipeEnabled={swipeEnabled}
    />
  );
};

export default withTheme(TabViewComponent);
