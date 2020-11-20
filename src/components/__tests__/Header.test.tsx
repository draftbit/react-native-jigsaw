import * as React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

it("renders container", () => {
  const tree = renderer
    .create(
      <Header
        onPress={() => {}}
        buttonText="Test"
        icon="check"
        title="Test Title"
        titleColor="black"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
