import React from "react";
import { FlatList as FlatListComponent } from "react-native-gesture-handler";
import type { FlatListProps } from "react-native";

const FlatList = React.forwardRef<FlatListComponent, FlatListProps<any>>(
  <T extends any>(
    { numColumns, ...rest }: FlatListProps<T>,
    ref: React.Ref<FlatListComponent>
  ) => {
    return (
      <FlatListComponent
        key={numColumns} // Changing numColumns requires re-rendering, setting it as the key ensures list is re-rendered when it changes
        numColumns={numColumns}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default FlatList;
