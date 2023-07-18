import React from "react";
import { View, ViewProps } from "react-native";

interface ZStackProps extends ViewProps {
  reversed?: boolean;
}

const ZStack: React.FC<ZStackProps> = ({ reversed, children, ...rest }) => {
  const absoluteChildren = React.useMemo(() => {
    let childrenArray = React.Children.toArray(
      children
    ) as React.ReactElement[];

    if (reversed) {
      childrenArray = childrenArray.reverse();
    }

    return childrenArray.map((child, index) => {
      const props = child.props || {};
      return React.cloneElement(
        child,
        {
          ...props,
          style: { position: "absolute", zIndex: index + 1, ...props.style },
        },
        props.children
      );
    });
  }, [children, reversed]);

  return <View {...rest}>{absoluteChildren}</View>;
};

export default ZStack;
