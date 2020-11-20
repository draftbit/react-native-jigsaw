import * as React from "react";
import renderer from "react-test-renderer";
import FAB from "../FAB";

it("renders FAB", () => {
  const tree = renderer
    .create(
      <FAB
        onPress={() => {
          console.log("Hello");
        }}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
