import * as React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../CheckboxAndroid";

it("renders checkbox android", () => {
  const tree = renderer.create(<Checkbox status="checked" />).toJSON();

  expect(tree).toMatchSnapshot();
});
