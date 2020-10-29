import * as React from "react";
import renderer from "react-test-renderer";
import AspectRatio from "../AspectRatio.web";
import { View } from "react-native";

it("renders aspect ratio", () => {
  const tree = renderer
    .create(
      <AspectRatio style={{ aspectRatio: 2 }}>
        <View />
      </AspectRatio>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
