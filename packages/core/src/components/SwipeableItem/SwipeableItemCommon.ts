import { pick } from "lodash";

export interface SwipeableItemBehindItem {
  title: string;
  revealSwipeDirection: "left" | "right";
  onPress?: () => void;
  onSwipe?: () => void;
  icon?: string;
  iconSize?: number;
  backgroundColor?: string;
  color?: string;
}

export interface RightSwipeProps {
  onSwipeRight?: () => void;
  rightSwipeTitle?: string;
  rightSwipeIcon?: string;
  rightSwipeIconSize?: number;
  rightSwipeBackgroundColor?: string;
  rightSwipeColor?: string;
}

export interface LeftSwipeProps {
  onSwipeLeft?: () => void;
  leftSwipeTitle?: string;
  leftSwipeIcon?: string;
  leftSwipeIconSize?: number;
  leftSwipeBackgroundColor?: string;
  leftSwipeColor?: string;
}

export function extractRightSwipeProps(object: object): RightSwipeProps {
  return pick(object, [
    "onSwipeRight",
    "rightSwipeTitle",
    "rightSwipeIcon",
    "rightSwipeIconSize",
    "rightSwipeBackgroundColor",
    "rightSwipeColor",
  ]);
}

export function extractLeftSwipeProps(object: object): LeftSwipeProps {
  return pick(object, [
    "onSwipeLeft",
    "leftSwipeTitle",
    "leftSwipeIcon",
    "leftSwipeIconSize",
    "leftSwipeBackgroundColor",
    "leftSwipeColor",
  ]);
}

export function rightSwipeToSwipeableItemBehindItem(
  swipe: RightSwipeProps
): Omit<SwipeableItemBehindItem, "onPress"> {
  return {
    title: swipe.rightSwipeTitle || "",
    revealSwipeDirection: "right",
    onSwipe: swipe.onSwipeRight,
    icon: swipe.rightSwipeIcon,
    iconSize: swipe.rightSwipeIconSize,
    backgroundColor: swipe.rightSwipeBackgroundColor,
    color: swipe.rightSwipeColor,
  };
}

export function leftSwipeToSwipeableItemBehindItem(
  swipe: LeftSwipeProps
): Omit<SwipeableItemBehindItem, "onPress"> {
  return {
    title: swipe.leftSwipeTitle || "",
    revealSwipeDirection: "left",
    onSwipe: swipe.onSwipeLeft,
    icon: swipe.leftSwipeIcon,
    iconSize: swipe.leftSwipeIconSize,
    backgroundColor: swipe.leftSwipeBackgroundColor,
    color: swipe.leftSwipeColor,
  };
}
