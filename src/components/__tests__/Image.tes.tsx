import * as React from "react";
import renderer from "react-test-renderer";
import Image from "../Image";

it("renders image", () => {
  const tree = renderer
    .create(<Image source={require("../../assets/icon.png")} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
