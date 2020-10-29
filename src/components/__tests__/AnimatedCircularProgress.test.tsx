import * as React from "react";
import renderer from "react-test-renderer";
import AnimatedCircularProgress from "../AnimatedCircularProgress";

it("renders animated circular progress", () => {
  const tree = renderer
    .create(<AnimatedCircularProgress fill={50} size={30} width={200} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
