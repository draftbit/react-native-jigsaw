import React from "react";
import { FlashListProps, FlashList } from "@shopify/flash-list";
import { FlatListProps, FlatList } from "react-native";

type ListComponentType = "FlatList" | "FlashList";

interface AdditionalSwipeableListProps {
  disableScrollWhenSwiping?: boolean;
  listComponent?: ListComponentType;
}

type FlatListSwipeableListProps<T> = FlatListProps<T> &
  AdditionalSwipeableListProps;

type FlashListSwipeableListProps<T> = FlashListProps<T> &
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

const SwipeableList = <T extends object>({
  disableScrollWhenSwiping = true,
  listComponent = "FlatList",
  ...rest
}: FlashListSwipeableListProps<T> | FlatListSwipeableListProps<T>) => {
  const [isSwiping, setIsSwiping] = React.useState(false);

  const onStartSwiping = () => {
    setIsSwiping(true);
  };

  const onStopSwiping = () => {
    setIsSwiping(false);
  };

  rest.scrollEnabled = disableScrollWhenSwiping ? !isSwiping : true;

  return (
    <SwipeableListContext.Provider value={{ onStartSwiping, onStopSwiping }}>
      <>
        {() => {
          switch (listComponent) {
            case "FlatList":
              return <FlatList {...(rest as FlatListProps<T>)} />;
            case "FlashList":
              return <FlashList {...(rest as FlashListProps<T>)} />;
          }
        }}
      </>
    </SwipeableListContext.Provider>
  );
};

export default SwipeableList;
