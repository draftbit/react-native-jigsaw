import React from "react";
import { FlatList as FlatListstComponent } from "react-native";
import type { FlatListProps } from "react-native";

const FlatList = React.forwardRef<FlatListstComponent, FlatListProps<any>>(
  <T extends any>(
    { numColumns, ...rest }: FlatListProps<T>,
    ref: React.Ref<FlatListstComponent>
  ) => {
    return (
      <FlatListstComponent
        key={numColumns} // Changing numColumns requires re-rendering, setting it as the key ensures list is re-rendered when it changes
        numColumns={numColumns}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default FlatList;
