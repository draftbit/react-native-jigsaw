import React from "react";
import { FlashListProps, FlashList } from "@shopify/flash-list";
import { FlatListProps, FlatList } from "react-native";

type ListComponentType = "FlatList" | "FlashList";

interface AdditionalSwipeableListProps {
  disableScrollWhenSwiping?: boolean;
  listComponent?: ListComponentType;
}

export type FlatListSwipeableListProps<T> = FlatListProps<T> &
  AdditionalSwipeableListProps;

export type FlashListSwipeableListProps<T> = FlashListProps<T> &
  AdditionalSwipeableListProps;

type SwipeableListContextType = {
  onStartSwiping: () => void;
  onStopSwiping: () => void;
};

export const SwipeableListContext =
  React.createContext<SwipeableListContextType>({
    onStartSwiping: () => {},
    onStopSwiping: () => {},
  });

const SwipeableList = React.forwardRef(
  <T extends object>(
    {
      disableScrollWhenSwiping = true,
      listComponent = "FlatList",
      ...rest
    }: FlashListSwipeableListProps<T> | FlatListSwipeableListProps<T>,
    ref: React.Ref<FlatList | FlashList<any>>
  ) => {
    const [isSwiping, setIsSwiping] = React.useState(false);

    const onStartSwiping = () => {
      setIsSwiping(true);
    };

    const onStopSwiping = () => {
      setIsSwiping(false);
    };

    rest.scrollEnabled = disableScrollWhenSwiping ? !isSwiping : true;

    const renderListComponent = () => {
      switch (listComponent) {
        case "FlatList":
          return (
            <FlatList
              ref={ref as React.Ref<FlatList>}
              {...(rest as FlatListProps<T>)}
            />
          );
        case "FlashList":
          return (
            <FlashList
              ref={ref as React.Ref<FlashList<T>>}
              {...(rest as FlashListProps<T>)}
            />
          );
      }
    };

    return (
      <SwipeableListContext.Provider value={{ onStartSwiping, onStopSwiping }}>
        <>{renderListComponent()}</>
      </SwipeableListContext.Provider>
    );
  }
);

export default SwipeableList;
