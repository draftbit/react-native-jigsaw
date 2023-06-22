import React from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import SwiperComponent from "react-native-web-swiper";

export interface SwiperProps<T> {
  onSwipe?: (index: number) => void;
  onSwipedNext?: (index: number) => void;
  onSwipedPrevious?: (index: number) => void;
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
  children: childrenProp,
  onIndexChanged: onIndexChangedProp,
  onSwipe,
  onSwipedNext,
  onSwipedPrevious,
  style,
}: SwiperProps<any>) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const numberOfItems = data?.length ?? React.Children.count(childrenProp);
  const swiperRef = React.useRef<any>(null);

  const onIndexChanged = (index: number) => {
    const previous = currentIndex;
    const current = index;

    onIndexChangedProp?.(index);
    setCurrentIndex(index);

    if (previous === numberOfItems - 1 && current === 0) {
      //Last -> first swipe
      onSwipedNext?.(previous);
    } else if (previous === 0 && current === numberOfItems - 1) {
      //First -> last swipe
      onSwipedPrevious?.(previous);
    } else if (current > previous) {
      onSwipedNext?.(previous);
    } else if (current < previous) {
      onSwipedPrevious?.(previous);
    }
    onSwipe?.(previous);
  };

  const children: React.ReactNode = React.useMemo(
    () =>
      Array.isArray(data) && renderItem
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
        : childrenProp,
    [childrenProp, data, renderItem, keyExtractor]
  );

  /*
  react-native-web-swiper assigns it's 'children' attribute as follows: `children = (() => React.Children.toArray(this.props.children))();`
  This is probelematic when state is involved due to anoynmous function effectivley creating new components everytime, losing any state
  
  This is a monkey patch that updates the 'children' attribute to just use the children from the props
  Can be removed when/if https://github.com/reactrondev/react-native-web-swiper/pull/102 is merged
  */
  React.useEffect(() => {
    const childrenArray = React.Children.toArray(
      swiperRef.current?.props?.children
    );
    if (swiperRef.current) {
      swiperRef.current.children = childrenArray;
      swiperRef.current.count = childrenArray.length;
      swiperRef.current.forceUpdate();
    }
  }, [children]);

  return (
    <View style={style}>
      {/* @ts-ignore */}
      <SwiperComponent
        ref={swiperRef}
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
        {children}
      </SwiperComponent>
    </View>
  );
};

export default Swiper;
