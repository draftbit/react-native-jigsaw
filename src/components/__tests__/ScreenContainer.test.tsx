import * as React from "react";
import renderer from "react-test-renderer";
import ScreenContainer from "../ScreenContainer";

it("renders screen container", () => {
  const tree = renderer.create(<ScreenContainer />).toJSON();

  expect(tree).toMatchSnapshot();
});
