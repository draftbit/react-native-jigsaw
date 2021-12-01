import React from "react";
import { FlatList } from "react-native";
import { View, StyleProp, ViewStyle } from "react-native";
import Swiper from "react-native-swiper/src/";

console.log({ Swiper });

export interface SwiperProps {
  vertical?: boolean;
  loop?: boolean;
  index?: number;
  showsButtons?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  autoplayDirection?: boolean;
  showsPagination?: boolean;
  dotColor?: string;
  activeDotColor?: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SwiperComponent = ({
  vertical = true,
  loop = false,
  index = 0,
  showsButtons = true,
  autoplay = false,
  autoplayTimeout = 2.5,
  autoplayDirection = true,
  showsPagination = false,
  dotColor,
  activeDotColor,
  children,
  style,
}: SwiperProps) => {
  const computedChildren = React.useMemo(() => {
    const newChildren: any[] = [];
    React.Children.toArray(children).forEach((child: any) => {
      // console.log({
      //   child,
      //   type: child.type,
      //   flatList: FlatList,
      //   isFlatlist: FlatList === child.type,
      // });
      if (child.type === FlatList) {
        // console.log({
        //   childrenOfChildren: React.Children.toArray(child.props.children),
        // });
        return React.Children.toArray(child.props.children).forEach(
          (listChild: any) => {
            newChildren.push(listChild);
          }
        );
      } else {
        return newChildren.push(child);
      }
    });
    return newChildren;
  }, [children]);

  return (
    <View style={style}>
      <Swiper
        index={index}
        showsButtons={showsButtons}
        loop={loop}
        horizontal={!vertical}
        autoplay={autoplay}
        autoplayTimeout={autoplayTimeout}
        autoplayDirection={!autoplayDirection}
        showsPagination={showsPagination}
        dotColor={dotColor}
        activeDotColor={activeDotColor}
      >
        {computedChildren}
      </Swiper>
    </View>
  );
};

export default SwiperComponent;
