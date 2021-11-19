import React from "react";
import { useWindowDimensions } from "react-native";
// import TabViewItem from "./TabViewItem";
import { TabView, SceneMap } from "react-native-tab-view";

interface TabViewProps {
  children: React.ReactNode;
}

const TabViewComponent = ({ children }: TabViewProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([]);
  const [tabScenes, setTabScenes] = React.useState({});

  // const renderScene = SceneMap({
  //   first: FirstRoute,
  //   second: SecondRoute,
  // });

  React.useEffect(() => {
    console.log(routes);
  }, [routes]);

  React.useEffect(() => {
    const newRoutes: any = [];
    const scenes: {
      [key: string]: React.ComponentType;
    } = {};
    React.Children.toArray(children)
      .filter((child: any) => {
        console.log({ child });
        return child.type.name === "TabViewItem";
      })
      .forEach((child: any) => {
        if (child?.props?.id) {
          newRoutes.push({
            key: child?.props?.id,
            title: child?.props?.title,
          });
          scenes[child?.props?.id] = () => child;
          console.log({ newRoutes });
        }
      });
    setRoutes(newRoutes);
    setTabScenes(scenes);
  }, [children]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap(tabScenes)}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default TabViewComponent;
