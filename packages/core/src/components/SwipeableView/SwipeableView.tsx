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
  extractSizeStyles,
  extractStyles,
} from "../../utilities";
import { SwipeRow } from "react-native-swipe-list-view";
import { IconSlot } from "../../interfaces/Icon";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import { SwipeableViewButtonProps } from "./SwipeableViewButton";
import { SwipeableViewSwipeHandlerProps } from "./SwipeableViewSwipeHandler";

export interface SwipeableViewProps extends IconSlot {
  closeOnPress?: boolean;
  leftOpenValue?: number;
  rightOpenValue?: number;
  leftActivationValue?: number;
  rightActivationValue?: number;
  swipeActivationPercentage?: number;
  stopLeftSwipe?: number;
  stopRightSwipe?: number;
  directionalDistanceChangeThreshold?: number;
  friction?: number;
  tension?: number;
  restSpeedThreshold?: number;
  restDisplacementThreshold?: number;
  disableLeftSwipe?: boolean;
  disableRightSwipe?: boolean;
  swipeToOpenVelocityContribution?: number;
  swipeToOpenPercent?: number;
  swipeToClosePercent?: number;
  style?: StyleProp<ViewStyle | TextStyle>;
  theme: Theme;
}

const SwipeableView: React.FC<React.PropsWithChildren<SwipeableViewProps>> = ({
  theme,
  style,
  children,
  Icon,
  closeOnPress,
  leftOpenValue,
  rightOpenValue,
  leftActivationValue,
  rightActivationValue,
  swipeActivationPercentage = 80,
  stopLeftSwipe,
  stopRightSwipe,
  swipeToOpenPercent = 30,
  friction = 20,
  ...rest
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
    extractSizeStyles(viewStyles),
  ]);

  //Remove styles already consumed from viewStyles
  Object.keys(parentContainerStyles).forEach((key) => delete viewStyles[key]);
  const surfaceContainerStyles = viewStyles;

  const [componentWidth, setComponentWidth] = React.useState<number | null>(
    null
  );
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
    (leftButtons.length && leftSwipeHandlers.length) ||
    (rightButtons.length && rightSwipeHandlers.length)
  ) {
    throw Error("Cannot combine swiper handler and buttons on the same side");
  }

  //Renders a single button/item. Used for both buttons and swipe handler
  const renderBehindItem = (
    props: SwipeableViewSwipeHandlerProps | SwipeableViewButtonProps,
    index: number
  ) => (
    <Pressable
      key={index.toString()}
      onPress={(props as any).onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: props.backgroundColor || theme.colors.primary },
      ]}
    >
      {props.icon && (
        <Icon
          name={props.icon}
          size={props.iconSize || 25}
          color={props.color || theme.colors.surface}
        />
      )}
      <Text
        style={[textStyles, { color: props.color || theme.colors.surface }]}
      >
        {props.title}
      </Text>
    </Pressable>
  );

  const isLeftSwipeHandler = !!leftSwipeHandlers.length;
  const isRightSwipeHandler = !!rightSwipeHandlers.length;

  const defaultLeftOpenValue = componentWidth ? componentWidth / 2 : 0;
  const defaultRightOpenValue = componentWidth ? -componentWidth / 2 : 0;

  return (
    <View
      onLayout={(event) => {
        setComponentWidth(event.nativeEvent.layout.width);
      }}
      style={[styles.parentContainer, parentContainerStyles]}
    >
      {/*@ts-ignore*/}
      <SwipeRow
        leftOpenValue={
          isLeftSwipeHandler ? 0 : leftOpenValue || defaultLeftOpenValue //If in swiping mode, don't keep open
        }
        rightOpenValue={
          isRightSwipeHandler ? 0 : rightOpenValue || defaultRightOpenValue
        }
        leftActivationValue={
          leftActivationValue || isLeftSwipeHandler
            ? defaultLeftOpenValue * (swipeActivationPercentage / 100) //When swipe passes activation percentage then it should be considered activated (call onSwipe)
            : defaultLeftOpenValue
        }
        rightActivationValue={
          rightActivationValue || isRightSwipeHandler
            ? defaultRightOpenValue * (swipeActivationPercentage / 100)
            : defaultRightOpenValue
        }
        stopLeftSwipe={stopLeftSwipe || defaultLeftOpenValue}
        stopRightSwipe={stopRightSwipe || defaultRightOpenValue}
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
        closeOnRowPress={closeOnPress}
        swipeToOpenPercent={swipeToOpenPercent}
        friction={friction}
        {...rest}
      >
        <View style={styles.behindContainer}>
          <View style={styles.behindContainerItem}>
            {(isLeftSwipeHandler ? leftSwipeHandlers : leftButtons).map(
              (item, index) => renderBehindItem(item.props, index)
            )}
          </View>
          <View style={styles.behindContainerItem}>
            {(isRightSwipeHandler ? rightSwipeHandlers : rightButtons).map(
              (item, index) => renderBehindItem(item.props, index)
            )}
          </View>
        </View>
        <View
          style={[
            styles.surfaceContainer,
            {
              backgroundColor: theme.colors.background,
            },
            surfaceContainerStyles,
          ]}
        >
          {remainingChildren}
        </View>
      </SwipeRow>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    overflow: "hidden",
    minHeight: 50,
  },
  behindContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  behindContainerItem: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  surfaceContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: 10,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default withTheme(SwipeableView);
