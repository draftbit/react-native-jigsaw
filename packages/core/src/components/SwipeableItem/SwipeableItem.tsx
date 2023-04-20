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
import { SwipeableItemButtonProps } from "./SwipeableItemButton";
import { SwipeableListContext } from "./SwipeableList";
import {
  RightSwipeProps,
  LeftSwipeProps,
  SwipeableItemBehindItem,
  leftSwipeToSwipeableItemBehindItem,
  rightSwipeToSwipeableItemBehindItem,
  extractLeftSwipeProps,
  extractRightSwipeProps,
} from "./SwipeableItemCommon";

export interface SwipeableItemProps extends IconSlot {
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
  disableLeftSwipe?: boolean;
  disableRightSwipe?: boolean;
  swipeToOpenVelocityContribution?: number;
  swipeToOpenPercent?: number;
  swipeToClosePercent?: number;
  style?: StyleProp<ViewStyle | TextStyle>;
  theme: Theme;
}

type Props = SwipeableItemProps & RightSwipeProps & LeftSwipeProps;

const SwipeableItem: React.FC<React.PropsWithChildren<Props>> = ({
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
  friction = 20,
  ...rest
}) => {
  const instanceOfSwipeableItemButtonProps = (
    object: any
  ): object is SwipeableItemButtonProps => {
    return "title" in object && "side" in object;
  };

  const isEmptyObject = (object: object) => {
    return Object.keys(object).length === 0;
  };

  const { onStartSwiping, onStopSwiping } =
    React.useContext(SwipeableListContext);

  const { viewStyles, textStyles } = extractStyles(style);

  const { borderStyles, marginStyles } =
    extractBorderAndMarginStyles(viewStyles);

  const sizeStyles = extractSizeStyles(viewStyles);

  const parentContainerStyles = StyleSheet.flatten([
    borderStyles,
    marginStyles,
    extractFlexItemStyles(viewStyles),
    extractPositionStyles(viewStyles),
    extractEffectStyles(viewStyles),
    sizeStyles,
  ]);

  //Remove styles already consumed from viewStyles
  Object.keys(parentContainerStyles).forEach((key) => delete viewStyles[key]);
  const surfaceContainerStyles = StyleSheet.flatten([
    viewStyles,
    sizeStyles /* Size styles needs to be readded to surface container due to inconsistencies on web */,
  ]);

  const [componentWidth, setComponentWidth] = React.useState<number | null>(
    null
  );
  const leftButtons = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          instanceOfSwipeableItemButtonProps(child.props) &&
          child.props.side === "left"
      ) as React.ReactElement<SwipeableItemButtonProps>[],
    [children]
  );

  const rightButtons = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          instanceOfSwipeableItemButtonProps(child.props) &&
          child.props.side === "right"
      ) as React.ReactElement<SwipeableItemButtonProps>[],
    [children]
  );

  const remainingChildren = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) &&
          !instanceOfSwipeableItemButtonProps(child.props)
      ),
    [children]
  );

  const leftSwipe = extractLeftSwipeProps(rest);
  const rightSwipe = extractRightSwipeProps(rest);

  const isLeftSwipeHandled = !isEmptyObject(leftSwipe);
  const isRightSwipeHandled = !isEmptyObject(rightSwipe);

  if (leftButtons.length > 2 || rightButtons.length > 2) {
    throw Error("Cannot have more than 2 SwipeableItemButton(s) per side");
  }

  if (
    (leftButtons.length && isLeftSwipeHandled) ||
    (rightButtons.length && isRightSwipeHandled)
  ) {
    throw Error(
      "Colliding configuration in SwipeableItem. You cannot have SwipeableItemButton(s) on the side where swipe handling is configured. Either reset swipe configuration or remove the button(s)."
    );
  }

  //Renders a single 'behind' item. Used for both buttons and swipe handler
  const renderBehindItem = (item: SwipeableItemBehindItem, index: number) => (
    <Pressable
      key={index.toString()}
      onPress={(item as any).onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: item.backgroundColor || theme.colors.primary },
      ]}
    >
      {item.icon && (
        <Icon
          name={item.icon}
          size={item.iconSize || 25}
          color={item.color || theme.colors.surface}
        />
      )}
      <Text style={[textStyles, { color: item.color || theme.colors.surface }]}>
        {item.title}
      </Text>
    </Pressable>
  );

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
          isLeftSwipeHandled ? 0 : leftOpenValue || defaultLeftOpenValue //If in swiping mode, don't keep open
        }
        rightOpenValue={
          isRightSwipeHandled ? 0 : rightOpenValue || defaultRightOpenValue
        }
        leftActivationValue={
          leftActivationValue || isLeftSwipeHandled
            ? defaultLeftOpenValue * (swipeActivationPercentage / 100) //When swipe passes activation percentage then it should be considered activated (call onSwipe)
            : defaultLeftOpenValue
        }
        rightActivationValue={
          rightActivationValue || isRightSwipeHandled
            ? defaultRightOpenValue * (swipeActivationPercentage / 100)
            : defaultRightOpenValue
        }
        stopLeftSwipe={stopLeftSwipe || defaultLeftOpenValue}
        stopRightSwipe={stopRightSwipe || defaultRightOpenValue}
        onLeftAction={
          isLeftSwipeHandled ? () => leftSwipe.onLeftSwipe?.() : undefined
        }
        onRightAction={
          isRightSwipeHandled ? () => rightSwipe.onRightSwipe?.() : undefined
        }
        swipeGestureBegan={onStartSwiping}
        swipeGestureEnded={onStopSwiping}
        closeOnRowPress={closeOnPress}
        friction={friction}
        {...rest}
      >
        <View style={styles.behindContainer}>
          <View style={styles.behindContainerItem}>
            {isLeftSwipeHandled
              ? renderBehindItem(
                  leftSwipeToSwipeableItemBehindItem(leftSwipe),
                  0
                )
              : leftButtons.map((item, index) =>
                  renderBehindItem(item.props, index)
                )}
          </View>
          <View style={styles.behindContainerItem}>
            {isRightSwipeHandled
              ? renderBehindItem(
                  rightSwipeToSwipeableItemBehindItem(rightSwipe),
                  0
                )
              : rightButtons.map((item, index) =>
                  renderBehindItem(item.props, index)
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
    width: "100%",
    minHeight: 50,
    overflow: "hidden",
  },
});

export default withTheme(SwipeableItem);
