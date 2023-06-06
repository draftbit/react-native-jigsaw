import { pick } from "lodash";

export interface SwipeableItemBehindItem {
  title: string;
  revealSwipeDirection: "left" | "right";
  onPress?: () => void;
  onSwipe?: () => void;
  closeOnPress?: boolean;
  icon?: string;
  iconSize?: number;
  backgroundColor?: string;
  color?: string;
}

export interface RightSwipeProps {
  onSwipedRight?: () => void;
  rightSwipeTitle?: string;
  rightSwipeIcon?: string;
  rightSwipeIconSize?: number;
  rightSwipeBackgroundColor?: string;
  rightSwipeColor?: string;
}

export interface LeftSwipeProps {
  onSwipedLeft?: () => void;
  leftSwipeTitle?: string;
  leftSwipeIcon?: string;
  leftSwipeIconSize?: number;
  leftSwipeBackgroundColor?: string;
  leftSwipeColor?: string;
}

export function extractRightSwipeProps(object: object): RightSwipeProps {
  return pick(object, [
    "onSwipedRight",
    "rightSwipeTitle",
    "rightSwipeIcon",
    "rightSwipeIconSize",
    "rightSwipeBackgroundColor",
    "rightSwipeColor",
  ]);
}

export function extractLeftSwipeProps(object: object): LeftSwipeProps {
  return pick(object, [
    "onSwipedLeft",
    "leftSwipeTitle",
    "leftSwipeIcon",
    "leftSwipeIconSize",
    "leftSwipeBackgroundColor",
    "leftSwipeColor",
  ]);
}

export function rightSwipeToSwipeableItemBehindItem(
  swipe: RightSwipeProps
): Omit<SwipeableItemBehindItem, "onPress" | "closeOnPress"> {
  return {
    title: swipe.rightSwipeTitle || "",
    revealSwipeDirection: "right",
    onSwipe: swipe.onSwipedRight,
    icon: swipe.rightSwipeIcon,
    iconSize: swipe.rightSwipeIconSize,
    backgroundColor: swipe.rightSwipeBackgroundColor,
    color: swipe.rightSwipeColor,
  };
}

export function leftSwipeToSwipeableItemBehindItem(
  swipe: LeftSwipeProps
): Omit<SwipeableItemBehindItem, "onPress" | "closeOnPress"> {
  return {
    title: swipe.leftSwipeTitle || "",
    revealSwipeDirection: "left",
    onSwipe: swipe.onSwipedLeft,
    icon: swipe.leftSwipeIcon,
    iconSize: swipe.leftSwipeIconSize,
    backgroundColor: swipe.leftSwipeBackgroundColor,
    color: swipe.leftSwipeColor,
  };
}
