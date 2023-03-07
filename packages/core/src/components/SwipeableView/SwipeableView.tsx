import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Text,
} from "react-native";
import Pressable from "../Pressable";
import {
  extractBorderAndMarginStyles,
  extractEffectStyles,
  extractFlexItemStyles,
  extractPositionStyles,
  extractStyles,
} from "../../utilities";
import { SwipeRow } from "react-native-swipe-list-view";
import { IconSlot } from "../../interfaces/Icon";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import { SwipeableViewButtonProps } from "./SwipeableViewButton";
import { SwipeableViewSwipeHandlerProps } from "./SwipeableViewSwipeHandler";

export interface SwipeableViewProps extends IconSlot {
  style?: StyleProp<ViewStyle | TextStyle>;
  theme: Theme;
}

const SwipeableView: React.FC<React.PropsWithChildren<SwipeableViewProps>> = ({
  theme,
  style,
  children,
  Icon,
}) => {
  const instanceOfSwipeableViewButtonProps = (
    object: any
  ): object is SwipeableViewButtonProps => {
    return "title" in object && "side" in object && "onPress" in object;
  };

  const instanceOfSwipeableViewSwipeHandlerProps = (
    object: any
  ): object is SwipeableViewSwipeHandlerProps => {
    return "title" in object && "side" in object && "onSwipe" in object;
  };

  const { viewStyles, textStyles } = extractStyles(style);

  const { borderStyles, marginStyles } =
    extractBorderAndMarginStyles(viewStyles);

  const parentContainerStyles = StyleSheet.flatten([
    borderStyles,
    marginStyles,
    extractFlexItemStyles(viewStyles),
    extractPositionStyles(viewStyles),
    extractEffectStyles(viewStyles),
  ]);

  //Remove styles already consumed from viewStyles
  Object.keys(parentContainerStyles).forEach((key) => delete viewStyles[key]);
  const surfaceContainerStyles = viewStyles;

  const leftButtons = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          instanceOfSwipeableViewButtonProps(child.props) &&
          child.props.side === "left"
      ) as React.ReactElement<SwipeableViewButtonProps>[],
    [children]
  );

  const rightButtons = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          instanceOfSwipeableViewButtonProps(child.props) &&
          child.props.side === "right"
      ) as React.ReactElement<SwipeableViewButtonProps>[],
    [children]
  );

  const leftSwipeHandlers = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          instanceOfSwipeableViewSwipeHandlerProps(child.props) &&
          child.props.side === "left"
      ) as React.ReactElement<SwipeableViewSwipeHandlerProps>[],
    [children]
  );

  const rightSwipeHandlers = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          instanceOfSwipeableViewSwipeHandlerProps(child.props) &&
          child.props.side === "right"
      ) as React.ReactElement<SwipeableViewSwipeHandlerProps>[],
    [children]
  );

  const remainingChildren = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          !instanceOfSwipeableViewSwipeHandlerProps(child.props) &&
          !instanceOfSwipeableViewButtonProps(child.props)
      ),
    [children]
  );

  if (leftButtons.length > 2 || rightButtons.length > 2) {
    throw Error("Cannot have more than 2 buttons per side");
  }

  if (leftSwipeHandlers.length > 1 || rightSwipeHandlers.length > 1) {
    throw Error("Cannot have more than 1 swiper handler per side");
  }

  if (
    (leftButtons && leftSwipeHandlers) ||
    (rightButtons && rightSwipeHandlers)
  ) {
    throw Error("Cannot combine swiper handler and buttons on the same side");
  }

  const isLeftSwipeHandler = !!leftSwipeHandlers.length;
  const isRightSwipeHandler = !!rightSwipeHandlers.length;

  //Renders a single button/item. Used for both buttons and swipe handler
  const renderBehindItem = (
    props: SwipeableViewSwipeHandlerProps | SwipeableViewButtonProps
  ) => (
    <Pressable
      onPress={(props as any).onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: props.backgroundColor },
      ]}
    >
      {props.icon && (
        <Icon
          style={styles.buttonIcon}
          name={props.icon}
          size={16}
          color={props.color}
        />
      )}
      <Text style={[textStyles, { color: props.color }]}>{props.title}</Text>
    </Pressable>
  );

  return (
    <View style={[styles.parentContainer, parentContainerStyles]}>
      {/*@ts-ignore*/}
      <SwipeRow
        onLeftAction={
          isLeftSwipeHandler
            ? () => leftSwipeHandlers[0].props.onSwipe?.()
            : undefined
        }
        onRightAction={
          isRightSwipeHandler
            ? () => rightSwipeHandlers[0].props.onSwipe?.()
            : undefined
        }
      >
        <View
          style={[
            styles.behindContainer,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <View style={styles.behindContainerItem}>
            {(isLeftSwipeHandler ? leftSwipeHandlers : leftButtons).map(
              (item) => renderBehindItem(item.props)
            )}
          </View>
          <View style={styles.behindContainerItem}>
            {(isRightSwipeHandler ? rightSwipeHandlers : rightButtons).map(
              (item) => renderBehindItem(item.props)
            )}
          </View>
        </View>
        <View style={[styles.surfaceContainer, surfaceContainerStyles]}>
          {remainingChildren}
        </View>
      </SwipeRow>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    overflow: "hidden",
  },
  behindContainer: {
    flex: 1,
  },
  behindContainerItem: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    marginBottom: 10,
  },
  surfaceContainer: {},
});

export default withTheme(SwipeableView);
