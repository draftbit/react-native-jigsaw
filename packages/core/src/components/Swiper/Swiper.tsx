import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import SwiperComponent from "react-native-web-swiper";

export interface SwiperProps<T> {
  onSwipedLeft?: (index: number) => void;
  onSwipedRight?: (index: number) => void;
  onSwipedUp?: (index: number) => void;
  onSwipedDown?: (index: number) => void;
  vertical?: boolean;
  loop?: boolean;
  from?: number;
  timeout?: number;
  prevTitle?: string;
  nextTitle?: string;
  prevTitleColor?: string;
  nextTitleColor?: string;
  dotsTouchable?: boolean;
  dotColor?: string;
  dotActiveColor?: string;
  children: React.ReactNode;
  data?: Array<T>;
  keyExtractor: (item: T, index: number) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
  onIndexChanged?: (index: number) => void;
}

const Swiper = ({
  vertical = false,
  loop = false,
  timeout = 0,
  from = 0,
  prevTitle = "",
  nextTitle = "",
  prevTitleColor,
  nextTitleColor,
  dotsTouchable = true,
  dotColor,
  dotActiveColor,
  data,
  keyExtractor,
  renderItem,
  children,
  onIndexChanged: onIndexChangedProp,
  onSwipedLeft,
  onSwipedRight,
  onSwipedUp,
  onSwipedDown,
  style,
}: SwiperProps<any>) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const numberOfItems = data?.length ?? React.Children.count(children);

  const onIndexChanged = (index: number) => {
    const previous = currentIndex;
    const current = index;

    onIndexChangedProp?.(index);
    setCurrentIndex(index);

    if (previous === numberOfItems - 1 && current === 0) {
      //Last -> first swipe
      if (vertical) {
        onSwipedUp?.(previous);
      } else {
        onSwipedLeft?.(previous);
      }
    } else if (previous === 0 && current === numberOfItems - 1) {
      //First -> last swipe
      if (vertical) {
        onSwipedDown?.(previous);
      } else {
        onSwipedRight?.(previous);
      }
    } else if (current > previous) {
      if (vertical) {
        onSwipedUp?.(previous);
      } else {
        onSwipedLeft?.(previous);
      }
    } else if (current < previous) {
      if (vertical) {
        onSwipedDown?.(previous);
      } else {
        onSwipedRight?.(previous);
      }
    }
  };

  return (
    <View style={style}>
      {/* @ts-ignore */}
      <SwiperComponent
        from={from}
        loop={loop}
        timeout={timeout}
        vertical={vertical}
        onIndexChanged={onIndexChanged}
        controlsProps={{
          prevTitle,
          nextTitle,
          prevTitleStyle: { color: prevTitleColor },
          nextTitleStyle: { color: nextTitleColor },
          dotsTouchable,
          ...(dotColor
            ? { dotProps: { badgeStyle: { backgroundColor: dotColor } } }
            : {}),
          ...(dotActiveColor
            ? { dotActiveStyle: { backgroundColor: dotActiveColor } }
            : {}),
        }}
      >
        {data && renderItem
          ? data.map((item, index) => {
              const component = renderItem({ item, index });

              if (!component) {
                return null;
              }

              const key = keyExtractor ? keyExtractor(item, index) : index;
              return React.cloneElement(component, {
                key,
              });
            })
          : children}
      </SwiperComponent>
    </View>
  );
};

export default Swiper;
