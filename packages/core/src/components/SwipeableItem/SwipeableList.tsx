import React from "react";
import { FlashListProps, FlashList } from "@shopify/flash-list";
import { FlatListProps } from "react-native";
import {
  FlatList as FlatListComponent,
  NativeViewGestureHandlerProps,
} from "react-native-gesture-handler";
import FlatList from "../FlatList";

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
    ref: React.Ref<FlatListComponent | FlashList<any>>
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
              ref={ref as React.Ref<FlatListComponent>}
              {...(rest as FlatListProps<T> & NativeViewGestureHandlerProps)}
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
