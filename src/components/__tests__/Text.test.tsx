import * as React from "react";
import renderer from "react-test-renderer";
import Text from "../Text";

it("renders text", () => {
  const tree = renderer.create(<Text>Test</Text>).toJSON();

  expect(tree).toMatchSnapshot();
});
