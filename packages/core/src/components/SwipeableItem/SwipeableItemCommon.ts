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
  onSwipeRight?: () => void;
  rightSwipeTitle: string;
  rightSwipeIcon?: string;
  rightSwipeIconSize?: number;
  rightSwipeBackgroundColor?: string;
  rightSwipeColor?: string;
}

export interface LeftSwipeProps {
  onSwipeLeft?: () => void;
  leftSwipeTitle: string;
  leftSwipeIcon?: string;
  leftSwipeIconSize?: number;
  leftSwipeBackgroundColor?: string;
  leftSwipeColor?: string;
}

export function rightSwipeToSwipeableItemBehindItem(
  swipe: RightSwipeProps
): Omit<SwipeableItemBehindItem, "onPress"> {
  return {
    title: swipe.rightSwipeTitle,
    side: "left",
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
    title: swipe.leftSwipeTitle,
    side: "right",
    onSwipe: swipe.onSwipeLeft,
    icon: swipe.leftSwipeIcon,
    iconSize: swipe.leftSwipeIconSize,
    backgroundColor: swipe.leftSwipeBackgroundColor,
    color: swipe.leftSwipeColor,
  };
}
