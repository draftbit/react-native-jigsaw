import * as React from "react";
import renderer from "react-test-renderer";
import IconButton from "../IconButton";

it("renders icon button", () => {
  const tree = renderer.create(<IconButton onPress={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
