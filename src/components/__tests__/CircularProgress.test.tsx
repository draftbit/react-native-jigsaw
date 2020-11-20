import * as React from "react";
import renderer from "react-test-renderer";
import CircularProgress from "../CircularProgress";

it("renders circular progress", () => {
  const tree = renderer
    .create(<CircularProgress fill={20} size={40} width={200} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
