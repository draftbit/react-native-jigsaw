import React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import DeckSwiperComponent from "react-native-deck-swiper";

export interface DeckSwiperProps<T> {
  onIndexChanged?: (index: number) => void;
  onEndReached?: () => void;
  startCardIndex?: number;
  infiniteSwiping?: boolean;
  verticalEnabled?: boolean;
  horizontalEnabled?: boolean;
  visibleCardCount?: number;
  data?: Array<T>;
  keyExtractor?: (item: T) => string;
  renderItem?: ({ item, index }: { item: T; index: number }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const DeckSwiper = <T extends object>({
  onIndexChanged,
  onEndReached,
  startCardIndex = 0,
  infiniteSwiping = false,
  verticalEnabled = true,
  horizontalEnabled = true,
  visibleCardCount = 1,
  data,
  keyExtractor,
  renderItem,
  style,
  children,
}: React.PropsWithChildren<DeckSwiperProps<T>>) => {
  //Both 'renderItem' and 'data' are optional to allow direct children. But if one is included, both need to be included
  if ((data && !renderItem) || (renderItem && !data)) {
    throw new Error(
      "'renderItem' and 'data' need to both be provided to lazily render. Either remove them entirley or include both"
    );
  }

  if (data && renderItem && children) {
    console.warn(
      "'children' of DeckSwiper ignored due to usage of 'data' and 'renderItem'"
    );
  }

  const childrenArray = React.useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  // an array of indices based on children count
  const cardsFillerData = React.useMemo(
    () => Array.from(Array(childrenArray.length).keys()),
    [childrenArray]
  );

  const cardsData = data || cardsFillerData;

  const renderCard = (card: any, index: number): JSX.Element => {
    if (renderItem) {
      return renderItem({ item: card, index });
    } else {
      return <>{childrenArray[index]}</>;
    }
  };

  const renderFirstCard = (): JSX.Element | undefined => {
    if (cardsData.length) {
      return renderCard(cardsData[0], 0);
    }
    return undefined;
  };

  const cardKeyExtractor = (card: any) => {
    if (keyExtractor) {
      return keyExtractor(card);
    } else {
      return card?.toString();
    }
  };

  /**
   * By default react-native-deck-swiper positions everything with absolute position.
   * To overcome this, it is wrapped in a View to be able to add the component in any layout structure.
   *
   *
   * Since all children of that View are absolutley positioned, the View does not have a height and still looks and behaves weird.
   * To fix/mitage this without setting a static height, the first card is rendered in invisible state to take up space.
   * This effectivley makes the default height of the container be the height of the first card.
   */

  return (
    <View>
      <View style={styles.containerHeightFiller}>{renderFirstCard()}</View>
      <DeckSwiperComponent
        cards={cardsData as any[]}
        renderCard={renderCard}
        keyExtractor={cardKeyExtractor}
        containerStyle={
          StyleSheet.flatten([styles.cardsContainer, style]) as
            | object
            | undefined
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
        cardVerticalMargin={0}
        cardHorizontalMargin={0}
      />
    </View>
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
  containerHeightFiller: {
    opacity: 0.0,
  },
});

export default DeckSwiper;
