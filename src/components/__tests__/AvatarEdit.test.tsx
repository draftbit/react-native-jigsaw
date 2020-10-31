import * as React from "react";
import renderer from "react-test-renderer";
import AvatarEdit from "../AvatarEdit";

it("renders avatar edit", () => {
  const tree = renderer
    .create(<AvatarEdit image={require("../../assets/icon.png")} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
