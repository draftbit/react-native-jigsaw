import React from "react";

interface TabViewItemProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const TabViewItem = ({ title, id, children }: TabViewItemProps) => {
  console.log({ title, id });
  return <>{children}</>;
};

export default TabViewItem;
