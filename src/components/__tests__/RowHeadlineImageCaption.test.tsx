import * as React from "react";
import renderer from "react-test-renderer";
import RowHeadlineImageCaption from "../RowHeadlineImageCaption";

it("renders row headline image caption", () => {
  const tree = renderer
    .create(
      <RowHeadlineImageCaption image={require("../../assets/icon.png")} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
