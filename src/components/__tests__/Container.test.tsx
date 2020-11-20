import * as React from "react";
import renderer from "react-test-renderer";
import Container from "../Container";

it("renders container", () => {
  const tree = renderer
    .create(
      <Container
        backgroundColor="blue"
        borderColor="red"
        borderWidth={2}
        useThemeGutterPadding
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
