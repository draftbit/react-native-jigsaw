import { pick } from "lodash";

export interface SwipeableItemBehindItem {
  title: string;
  side: "left" | "right";
  onPress?: () => void;
  onSwipe?: () => void;
  icon?: string;
  iconSize?: number;
  backgroundColor?: string;
  color?: string;
}

export interface RightSwipeProps {
  onRightSwipe?: () => void;
  rightSwipeTitle?: string;
  rightSwipeIcon?: string;
  rightSwipeIconSize?: number;
  rightSwipeBackgroundColor?: string;
  rightSwipeColor?: string;
}

export interface LeftSwipeProps {
  onLeftSwipe?: () => void;
  leftSwipeTitle?: string;
  leftSwipeIcon?: string;
  leftSwipeIconSize?: number;
  leftSwipeBackgroundColor?: string;
  leftSwipeColor?: string;
}

export function extractRightSwipeProps(object: object): RightSwipeProps {
  return pick(object, [
    "onRightSwipe",
    "rightSwipeTitle",
    "rightSwipeIcon",
    "rightSwipeIconSize",
    "rightSwipeBackgroundColor",
    "rightSwipeColor",
  ]);
}

export function extractLeftSwipeProps(object: object): LeftSwipeProps {
  return pick(object, [
    "onLeftSwipe",
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
    side: "right",
    onSwipe: swipe.onRightSwipe,
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
    side: "left",
    onSwipe: swipe.onLeftSwipe,
    icon: swipe.leftSwipeIcon,
    iconSize: swipe.leftSwipeIconSize,
    backgroundColor: swipe.leftSwipeBackgroundColor,
    color: swipe.leftSwipeColor,
  };
}
