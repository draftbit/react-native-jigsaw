import React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import DeckSwiperComponent from "react-native-deck-swiper";

export interface DeckSwiperProps {
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
  startCardIndex?: number;
  infiniteSwiping?: boolean;
  verticalEnabled?: boolean;
  horizontalEnabled?: boolean;
  visibleCardCount?: number;
  style?: StyleProp<ViewStyle>;
}

const DeckSwiper: React.FC<React.PropsWithChildren<DeckSwiperProps>> = ({
  onIndexChanged,
  onEndReached,
  startCardIndex = 0,
  infiniteSwiping = false,
  verticalEnabled = true,
  horizontalEnabled = true,
  visibleCardCount = 1,
  style,
  children,
}) => {
  const childrenArray = React.useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  // an array of indices based on children count
  const cardsFillerData = React.useMemo(
    () => Array.from(Array(childrenArray.length).keys()),
    [childrenArray]
  );

  return (
    <DeckSwiperComponent
      cards={cardsFillerData}
      renderCard={(_, i) => <>{childrenArray[i]}</>}
      keyExtractor={(card) => card?.toString()}
      containerStyle={
        StyleSheet.flatten([styles.cardsContainer, style]) as object | undefined
      }
      cardStyle={styles.card as object | undefined}
      onSwiped={onIndexChanged}
      onSwipedAll={onEndReached}
      cardIndex={startCardIndex}
      infinite={infiniteSwiping}
      verticalSwipe={verticalEnabled}
      horizontalSwipe={horizontalEnabled}
      showSecondCard={visibleCardCount > 1}
      stackSize={visibleCardCount}
      backgroundColor="transparent"
    />
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    width: "100%",
  },
  card: {
    left: 0,
    right: 0,
    width: "auto",
    height: "auto",
  },
});

export default DeckSwiper;
