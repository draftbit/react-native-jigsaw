import React from "react";
import { View, ViewProps, LayoutChangeEvent } from "react-native";
import { useDeepCompareEffect } from "../../utilities";

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
  const [childSizes, setChildSizes] = React.useState<Map<number, ChildSize>>(
    new Map()
  );
  const [maxChildWidth, setMaxChildWidth] = React.useState<number>();
  const [maxChildHeight, setMaxChildHeight] = React.useState<number>();

  const onChildLayout = React.useCallback(
    (index: number, width: number, height: number) => {
      const size: ChildSize = {
        width: roundTo3DecimalPoints(width), // rounded to prevent infinte useEffect loop caused by floating point precision issues
        height: roundTo3DecimalPoints(height),
      };
      setChildSizes(new Map(childSizes.set(index, size)));
    },
    [childSizes, setChildSizes]
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
    setChildSizes(new Map());
  }, [absoluteChildren.length]);

  const childSizeValues = Array.from(childSizes.values());

  useDeepCompareEffect(() => {
    let maxWidth = 0;
    let maxHeight = 0;

    childSizeValues.forEach(({ width, height }) => {
      if (width > maxWidth) {
        maxWidth = width;
      }
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    setMaxChildWidth(maxWidth);
    setMaxChildHeight(maxHeight);
  }, [childSizeValues, setMaxChildWidth, setMaxChildHeight]);

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

function roundTo3DecimalPoints(value: number) {
  return Math.round(value * 1000) / 1000;
}

export default ZStack;
