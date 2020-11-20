import * as React from "react";
import renderer from "react-test-renderer";
import Icon from "../Icon";

it("renders icon", () => {
  const tree = renderer.create(<Icon size={10} name="arrow" />).toJSON();

  expect(tree).toMatchSnapshot();
});
