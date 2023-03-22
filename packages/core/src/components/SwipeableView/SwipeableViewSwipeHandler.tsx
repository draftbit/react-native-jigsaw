import React from "react";

export interface SwipeableViewSwipeHandlerProps {
  title: string;
  side: "left" | "right";
  onSwipe: (() => void) | null; //Not optional in order to always exist in props
  icon?: string;
  iconSize?: number;
  backgroundColor?: string;
  color?: string;
}

//Renders nothing, acts as a wrapper to be used by SwipeableView
const SwipeableViewSwipeHandler: React.FC<
  SwipeableViewSwipeHandlerProps
> = () => {
  return null;
};

export default SwipeableViewSwipeHandler;
