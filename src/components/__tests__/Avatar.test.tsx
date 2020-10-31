import * as React from "react";
import renderer from "react-test-renderer";
import Avatar from "../Avatar";

it("renders avatar", () => {
  const tree = renderer.create(<Avatar />).toJSON();

  expect(tree).toMatchSnapshot();
});
