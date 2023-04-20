import React from "react";
import { SwipeableItemBehindItem } from "./SwipeableItemCommon";

export type SwipeableItemButtonProps = Omit<SwipeableItemBehindItem, "onSwipe">;

//Renders nothing, acts as a wrapper be used by SwipeableView
const SwipeableItemButton: React.FC<SwipeableItemButtonProps> = () => {
  return null;
};

export default SwipeableItemButton;
