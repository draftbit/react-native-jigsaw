import * as React from "react";
import renderer from "react-test-renderer";
import RadioButton from "../RadioButton";

it("renders radio buttons", () => {
  const tree = renderer.create(<RadioButton selected={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});
