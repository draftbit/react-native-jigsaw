import * as React from "react";
import renderer from "react-test-renderer";
import Switch from "../Switch";

it("renders switch", () => {
  const tree = renderer.create(<Switch value={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});
