import React from "react";
import { View, ViewProps, LayoutChangeEvent } from "react-native";

interface ZStackProps extends ViewProps {
  reversed?: boolean;
}

interface ChildSize {
  width: number;
  height: number;
}

const ZStack: React.FC<ZStackProps> = ({
  reversed,
  children,
  style,
  ...rest
}) => {
  const childSizes = React.useRef(new Map<number, ChildSize>());
  const [maxChildWidth, setMaxChildWidth] = React.useState<number>();
  const [maxChildHeight, setMaxChildHeight] = React.useState<number>();

  const onChildLayout = React.useCallback(
    (index: number, width: number, height: number) => {
      childSizes.current.set(index, {
        width,
        height,
      });

      let maxWidth = 0;
      let maxHeight = 0;

      for (const { width, height } of childSizes.current.values()) {
        if (width > maxWidth) {
          maxWidth = width;
        }
        if (height > maxHeight) {
          maxHeight = height;
        }
      }

      setMaxChildWidth(maxWidth);
      setMaxChildHeight(maxHeight);
    },
    [setMaxChildWidth, setMaxChildHeight]
  );

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
          onLayout: (event: LayoutChangeEvent) => {
            const layout = event.nativeEvent.layout;

            const fullWidth = layout.x + layout.width;
            const fullHeight = layout.y + layout.height;
            onChildLayout(index, fullWidth, fullHeight);

            props.onLayout?.(event);
          },
          key: index,
          style: { position: "absolute", zIndex: index + 1, ...props.style },
        },
        props.children
      );
    });
  }, [children, reversed, onChildLayout]);

  React.useEffect(() => {
    childSizes.current.clear();
  }, [absoluteChildren.length]);

  return (
    <View
      style={[
        maxChildWidth && maxChildHeight
          ? { width: maxChildWidth, height: maxChildHeight }
          : {},
        style,
      ]}
      {...rest}
    >
      {absoluteChildren}
    </View>
  );
};

export default ZStack;
