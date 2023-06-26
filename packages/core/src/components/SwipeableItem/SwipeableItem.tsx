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
  flattenReactFragments,
} from "../../utilities";
import { SwipeRow } from "react-native-swipe-list-view";
import { IconSlot } from "../../interfaces/Icon";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import SwipeableItemButton, {
  SwipeableItemButtonProps,
} from "./SwipeableItemButton";
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

/**
 * Clarification Regarding left/right directions and what they mean in the context of this component
 * ------------------------------------------------------------------------------------------------------------
 * Swipe Left / Left Swipe = Swiping to the left (i.e. Swiping from the right)
 * Swipe Right / Right Swipe = Swiping to the right (i.e. Swiping from the left)
 *
 * This is only applies in the context of swipes, and not anywhere where a direction is refernced.
 * For example 'rightOpenValue' referes to the open value on the right side.
 * While 'stopRightSwipe' refers to the stop value of the swipe from left to right, which is on the left side.
 * This is because one refers to a swipe and one does not, so the word 'right' has different meanings.
 *
 * This component is built around this concept to avoid confusion
 */

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
  children: childrenProp,
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
  disableLeftSwipe,
  disableRightSwipe,
  ...rest
}) => {
  const isEmptyObject = (object: object) => {
    return Object.keys(object).length === 0;
  };

  const { onStartSwiping, onStopSwiping } =
    React.useContext(SwipeableListContext);

  const swipeableRef = React.useRef<any>(null);

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

  const children: React.ReactNode[] = React.useMemo(
    () =>
      flattenReactFragments(
        React.Children.toArray(childrenProp) as React.ReactElement[]
      ),
    [childrenProp]
  );

  const leftSwipeButtons = React.useMemo(
    () =>
      children.filter(
        (child) =>
          React.isValidElement(child) &&
          child.type === SwipeableItemButton &&
          child.props.revealSwipeDirection === "left"
      ) as React.ReactElement<SwipeableItemButtonProps>[],
    [children]
  );

  const rightSwipeButtons = React.useMemo(
    () =>
      children.filter(
        (child) =>
          React.isValidElement(child) &&
          child.type === SwipeableItemButton &&
          child.props.revealSwipeDirection === "right"
      ) as React.ReactElement<SwipeableItemButtonProps>[],
    [children]
  );

  const remainingChildren = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        (child) =>
          React.isValidElement(child) && child.type !== SwipeableItemButton
      ),
    [children]
  );

  const leftSwipe = extractLeftSwipeProps(rest);
  const rightSwipe = extractRightSwipeProps(rest);

  const isLeftSwipeHandled = !isEmptyObject(leftSwipe);
  const isRightSwipeHandled = !isEmptyObject(rightSwipe);

  if (leftSwipeButtons.length > 2 || rightSwipeButtons.length > 2) {
    throw Error("Cannot have more than 2 SwipeableItemButton(s) per side");
  }

  if (
    (leftSwipeButtons.length && isLeftSwipeHandled) ||
    (rightSwipeButtons.length && isRightSwipeHandled)
  ) {
    throw Error(
      "Colliding configuration in SwipeableItem. You cannot have SwipeableItemButton(s) on the swipe direction where swipe handling is configured. Either reset swipe configuration or remove the button(s)."
    );
  }

  //Renders a single 'behind' item. Used for both buttons and swipe handler
  const renderBehindItem = (item: SwipeableItemBehindItem, index: number) => (
    <Pressable
      testID="swipeable-behind-item"
      key={index.toString()}
      onPress={() => {
        item.onPress?.();
        if (item.closeOnPress !== false) {
          swipeableRef.current?.closeRow();
        }
      }}
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
      {item.title && (
        <Text
          style={[textStyles, { color: item.color || theme.colors.surface }]}
        >
          {item.title}
        </Text>
      )}
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
        ref={swipeableRef}
        leftOpenValue={
          isRightSwipeHandled ? 0 : leftOpenValue || defaultLeftOpenValue //If in swiping mode, don't keep open
        }
        rightOpenValue={
          isLeftSwipeHandled ? 0 : rightOpenValue || defaultRightOpenValue
        }
        leftActivationValue={
          leftActivationValue || isRightSwipeHandled
            ? defaultLeftOpenValue * (swipeActivationPercentage / 100) //When swipe passes activation percentage then it should be considered activated (call onSwipe)
            : defaultLeftOpenValue
        }
        rightActivationValue={
          rightActivationValue || isLeftSwipeHandled
            ? defaultRightOpenValue * (swipeActivationPercentage / 100)
            : defaultRightOpenValue
        }
        stopLeftSwipe={stopRightSwipe || defaultLeftOpenValue}
        stopRightSwipe={stopLeftSwipe || defaultRightOpenValue}
        onLeftAction={
          isRightSwipeHandled ? () => rightSwipe.onSwipedRight?.() : undefined
        }
        onRightAction={
          isLeftSwipeHandled ? () => leftSwipe.onSwipedLeft?.() : undefined
        }
        swipeGestureBegan={onStartSwiping}
        swipeGestureEnded={onStopSwiping}
        closeOnRowPress={closeOnPress}
        friction={friction}
        disableLeftSwipe={disableRightSwipe}
        disableRightSwipe={disableLeftSwipe}
        {...rest}
      >
        <View style={styles.behindContainer}>
          <View style={styles.behindContainerItem}>
            {isRightSwipeHandled
              ? renderBehindItem(
                  rightSwipeToSwipeableItemBehindItem(rightSwipe),
                  0
                )
              : rightSwipeButtons.map((item, index) =>
                  renderBehindItem(item.props, index)
                )}
          </View>
          <View style={styles.behindContainerItem}>
            {isLeftSwipeHandled
              ? renderBehindItem(
                  leftSwipeToSwipeableItemBehindItem(leftSwipe),
                  0
                )
              : leftSwipeButtons.map((item, index) =>
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
