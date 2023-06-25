import React from "react";
import { View } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { SectionList, SectionHeader } from "../components/SectionList";
import { TabView, TabViewItem } from "../components/TabView";
import {
  SwipeableItem,
  SwipeableItemButton,
} from "../components/SwipeableItem";
import { flattenReactFragments } from "../utilities";

describe("Type checked components wrapped in a fragment tests", () => {
  describe("Type checked components render when wrapped in a fragment tests", () => {
    test("should SectionHeader render when wrapped in fragment", () => {
      render(
        <SectionList
          data={[{ test: "data" }]}
          renderItem={() => (
            <>
              <SectionHeader>
                <View testID="header" />
              </SectionHeader>
            </>
          )}
          sectionKey="test"
        />
      );

      const headerView = screen.queryByTestId("header");
      expect(headerView).toBeTruthy();
    });

    test("should TabViewItem render when wrapped in fragment", () => {
      render(
        <TabView Icon={() => <View />}>
          <>
            <TabViewItem title="Test">
              <View testID="tab-item" />
            </TabViewItem>
          </>
        </TabView>
      );

      const tabItem = screen.queryByTestId("tab-item");
      expect(tabItem).toBeTruthy();
    });

    test("should SwipeableItemButton render when wrapped in fragment", () => {
      render(
        <SwipeableItem Icon={() => <View />}>
          <>
            <SwipeableItemButton revealSwipeDirection="left" title="test" />
          </>
        </SwipeableItem>
      );

      const swipeableButton = screen.queryByTestId("swipeable-behind-item");
      expect(swipeableButton).toBeTruthy();
    });
  });

  describe("flattenReactFragments tests", () => {
    test("should extract components from react fragments", () => {
      const components = [
        <React.Fragment>
          <View testID="1" />
          <View testID="2" />
          <View testID="3" />
        </React.Fragment>,
        <>
          <View testID="4" />
        </>,
        <>
          <View testID="5" />
          <View testID="6" />
        </>,
      ];

      const result = flattenReactFragments(components);
      expect(result).toMatchInlineSnapshot(`
        [
          <View
            testID="1"
          />,
          <View
            testID="2"
          />,
          <View
            testID="3"
          />,
          <View
            testID="4"
          />,
          <View
            testID="5"
          />,
          <View
            testID="6"
          />,
        ]
      `);
    });
  });
});
