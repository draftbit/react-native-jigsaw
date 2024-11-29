import * as React from "react";
import { Text } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { SectionHeader, SectionList } from "../../components/SectionList";
import { Food, mockFoodData } from "../__mocks__/mock_food_data";
import { uniq } from "lodash";
import { DEFAULT_SECTION } from "../../components/SectionList/SectionList";

describe("SectionList tests", () => {
  test.each(["FlatList", "FlashList"])(
    "should render all data items in %p",
    (listComponent: string) => {
      render(
        <SectionList
          data={mockFoodData}
          renderItem={({ item }) => (
            <Text testID="data-item">{item?.name}</Text>
          )}
          sectionKey="category"
          listComponent={listComponent as "FlashList" | "FlatList"}
        />
      );

      const dataItems = screen.queryAllByTestId("data-item");
      expect(dataItems.length).toEqual(mockFoodData.length);
    }
  );

  test.each(["category", "priceRange"])(
    "should put data into sections based on key: %p",
    (argument: string) => {
      const sectionKey = argument as keyof Food;
      const sections = getSections(mockFoodData, sectionKey);
      const sectionFoodItems = generateEmptySectionSplitArrays<Food>(sections);

      render(
        <SectionList
          data={mockFoodData}
          renderItem={({ item, section }) => {
            if (item) {
              sectionFoodItems[section].push(item);
            }
            return <Text>{item?.name}</Text>;
          }}
          sectionKey={sectionKey}
        />
      );

      for (const section of sections) {
        expect(sectionFoodItems[section]).toEqual(
          mockFoodData.filter((item) => item[sectionKey] === section)
        );
      }
    }
  );

  test("should render default section header when none provided", () => {
    const sectionKey = "category";
    const sectionsCount = getSectionCount(mockFoodData, sectionKey);

    render(
      <SectionList
        data={mockFoodData}
        renderItem={({ item }) => <Text>{item?.name}</Text>}
        sectionKey={sectionKey}
      />
    );

    const headers = screen.queryAllByTestId("default-section-header");
    expect(headers).toHaveLength(sectionsCount);
  });

  test("should render custom section header when provided", () => {
    const sectionKey = "category";
    const sectionsCount = getSectionCount(mockFoodData, sectionKey);

    render(
      <SectionList
        data={mockFoodData}
        renderItem={({ item, section }) => (
          <>
            <SectionHeader>
              <Text testID="custom-header">{section}</Text>
            </SectionHeader>
            <Text>{item?.name}</Text>
          </>
        )}
        sectionKey={sectionKey}
      />
    );

    const headers = screen.queryAllByTestId("custom-header");
    expect(headers).toHaveLength(sectionsCount);
  });

  test("should data be put under default section when section key is not in object", () => {
    const foodWithoutCategory: Omit<Food, "category"> = {
      id: 149,
      name: "Hot Dog",
      priceRange: "low",
    };
    const data = [foodWithoutCategory, ...mockFoodData];

    render(
      <SectionList
        style={{ height: 1000 }}
        data={data}
        renderItem={({ item, section }) => {
          if (item === foodWithoutCategory) {
            return <Text testID="food-no-category">{section}</Text>;
          }
          return <Text>{item?.name}</Text>;
        }}
        sectionKey="category"
      />
    );

    const foodWithoutCategoryText = screen.getByTestId("food-no-category");
    expect(foodWithoutCategoryText).toHaveTextContent(DEFAULT_SECTION);
  });
});

function getSectionCount(
  data: { [key: string]: any }[],
  sectionKey: string
): number {
  return getSections(data, sectionKey).length;
}

function getSections(
  data: { [key: string]: any }[],
  sectionKey: string
): string[] {
  return uniq(data.map((item) => item[sectionKey]));
}

function generateEmptySectionSplitArrays<T>(sections: string[]): {
  [key: string]: T[];
} {
  const sectionSplitArrays: { [key: string]: T[] } = {};

  for (const section of sections) {
    sectionSplitArrays[section] = [];
  }

  return sectionSplitArrays;
}
