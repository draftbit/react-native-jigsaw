import * as React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../CheckboxIOS";

it("renders checkbox IOS", () => {
  const tree = renderer.create(<Checkbox status="checked" />).toJSON();

  expect(tree).toMatchSnapshot();
});
