import * as React from "react";
import renderer from "react-test-renderer";
import HeaderMedium from "../HeaderMedium";

it("renders container", () => {
  const tree = renderer
    .create(
      <HeaderMedium
        onPress={() => {}}
        buttonText="Test"
        icon="check"
        title="Test Title"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
