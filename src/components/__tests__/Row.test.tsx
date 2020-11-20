import * as React from "react";
import renderer from "react-test-renderer";
import Row from "../Row";

it("renders row", () => {
  const tree = renderer.create(<Row />).toJSON();

  expect(tree).toMatchSnapshot();
});
