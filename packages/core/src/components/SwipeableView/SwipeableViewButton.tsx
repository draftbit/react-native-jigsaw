import React from "react";

export interface SwipeableViewButtonProps {
  title: string;
  side: "left" | "right";
  onPress?: () => void;
  icon?: string;
  iconSize?: number;
  backgroundColor?: string;
  color?: string;
}

//Renders nothing, acts as a wrapper be used by SwipeableView
const SwipeableViewButton: React.FC<SwipeableViewButtonProps> = () => {
  return null;
};

export default SwipeableViewButton;
