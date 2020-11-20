import * as React from "react";
import renderer from "react-test-renderer";
import HeaderOverline from "../HeaderOverline";

it("renders container", () => {
  const tree = renderer
    .create(
      <HeaderOverline
        onPress={() => {}}
        buttonText="Test"
        icon="check"
        title="Test Title"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
