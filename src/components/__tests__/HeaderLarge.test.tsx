import * as React from "react";
import renderer from "react-test-renderer";
import HeaderLarge from "../HeaderLarge";

it("renders container", () => {
  const tree = renderer
    .create(
      <HeaderLarge
        onPress={() => {}}
        buttonText="Test"
        icon="check"
        title="Test Title"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
