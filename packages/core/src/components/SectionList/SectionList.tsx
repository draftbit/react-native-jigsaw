import React from "react";
import { FlashListProps, FlashList } from "@shopify/flash-list";
import { FlatListProps, FlatList } from "react-native";
import SectionHeader, { DefaultSectionHeader } from "./SectionHeader";
import { extractIfNestedInFragment } from "../../utilities";

type ListComponentType = "FlatList" | "FlashList";

interface AdditionalSectionListProps<T> {
  sectionKey: string;
  stickyHeader?: boolean;
  renderItem: (itemInfo: {
    item?: T;
    index: number;
    section: string;
  }) => JSX.Element;
  listComponent?: ListComponentType;
}

type FlatListSectionListProps<T> = Omit<FlatListProps<T>, "renderItem"> &
  AdditionalSectionListProps<T>;

type FlashListSectionListProps<T> = Omit<FlashListProps<T>, "renderItem"> &
  AdditionalSectionListProps<T>;

interface SectionListDataItem<T> {
  type: "DATA_ITEM";
  data: T;
}

interface SectionListSectionItem {
  type: "SECTION_ITEM";
  title: string;
}

type SectionListItem<T> = SectionListDataItem<T> | SectionListSectionItem;

export const DEFAULT_SECTION = "Uncategorized";

const SectionList = <T extends { [key: string]: any }>({
  sectionKey,
  stickyHeader = false,
  listComponent = "FlatList",
  data: dataProp,
  renderItem: renderItemProp,
  ...rest
}: FlatListSectionListProps<T> | FlashListSectionListProps<T>) => {
  const data = React.useMemo(() => (dataProp || []) as T[], [dataProp]);

  const dataWithSections = React.useMemo(() => {
    const result: SectionListItem<T>[] = [];
    const sectionDataItems: { [key: string]: T[] } = {};

    for (const item of data) {
      const section = item[sectionKey]?.toString() || DEFAULT_SECTION;
      if (sectionDataItems[section]) {
        sectionDataItems[section].push(item);
      } else {
        sectionDataItems[section] = [item];
      }
    }

    for (const section in sectionDataItems) {
      result.push({ type: "SECTION_ITEM", title: section });
      const sectionItems: SectionListDataItem<T>[] = sectionDataItems[
        section
      ].map((item) => ({ type: "DATA_ITEM", data: item }));
      result.push(...sectionItems);
    }

    return result;
  }, [data, sectionKey]);

  const sectionHeaderIndicies = React.useMemo(
    () =>
      stickyHeader
        ? dataWithSections
            .filter((item) => item.type === "SECTION_ITEM")
            .map((item) => dataWithSections.indexOf(item))
        : undefined,
    [dataWithSections, stickyHeader]
  );

  const extractSectionHeader = (
    element: JSX.Element | null
  ): JSX.Element | null => {
    if (!element) {
      return null;
    }

    const props = element.props || {};
    const children = React.Children.toArray(props.children).map((child) =>
      extractIfNestedInFragment(child as React.ReactElement)
    );

    if (element.type === SectionHeader) {
      return element;
    } else {
      for (const child of children) {
        if (child.type === SectionHeader) {
          return child;
        }
      }
    }
    return null;
  };

  const extractRemainingNonSectionHeader = (
    element: JSX.Element | null
  ): JSX.Element | null => {
    if (!element) {
      return null;
    }

    const props = element.props || {};
    const children = React.Children.toArray(props.children).map(
      (child) => child as React.ReactElement
    );
    if (element.type === SectionHeader) {
      return null;
    } else {
      const newChildren = [];
      for (const child of children) {
        if (child.type !== SectionHeader) {
          newChildren.push(child);
        }
      }
      return React.cloneElement(element, {
        ...props,
        children: newChildren,
      });
    }
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: SectionListItem<T>;
    index: number;
  }) => {
    switch (item.type) {
      case "SECTION_ITEM": {
        const renderedItem = renderItemProp({
          index,
          section: item.title,
        });
        return (
          extractSectionHeader(renderedItem) || (
            <DefaultSectionHeader title={item.title} />
          )
        );
      }
      case "DATA_ITEM": {
        const renderedItem = renderItemProp({
          item: item.data,
          index,
          section: item.data[sectionKey] || DEFAULT_SECTION,
        });
        return extractRemainingNonSectionHeader(renderedItem);
      }
    }
  };

  switch (listComponent) {
    case "FlatList":
      return (
        <FlatList
          stickyHeaderIndices={sectionHeaderIndicies}
          {...(rest as FlatListProps<SectionListItem<T>>)}
          data={dataWithSections}
          renderItem={renderItem}
        />
      );
    case "FlashList":
      return (
        <FlashList
          stickyHeaderIndices={sectionHeaderIndicies}
          {...(rest as FlashListProps<SectionListItem<T>>)}
          data={dataWithSections}
          renderItem={renderItem}
        />
      );
  }
};

export default SectionList;
