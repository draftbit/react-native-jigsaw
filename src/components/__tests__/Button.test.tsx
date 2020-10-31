import * as React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

it("renders button", () => {
  const tree = renderer.create(<Button onPress={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
