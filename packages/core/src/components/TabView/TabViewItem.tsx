import React from "react";
interface TabViewItemProps {
  title: string;
  id: string;
  icon: string;
  accessibilityLabel: string;
  children: React.ReactNode;
}

const TabViewItem = ({
  title,
  id,
  icon,
  children,
  accessibilityLabel,
}: TabViewItemProps) => {
  console.log({ title, id, icon, accessibilityLabel });
  return children;
};

export default TabViewItem;
